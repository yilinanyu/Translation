var gulp = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    gutil = require('gulp-util'), // Better error reporting and logs
    watchify = require('watchify'), //plugin for browserify to trigger event on changes
    uglify = require('gulp-uglify'), //plugin for minifying js
    rename = require('gulp-rename'),
    source = require('vinyl-source-stream'),
    connect = require('gulp-connect'), // Auto Reloads browser
    sass = require('gulp-sass'),// Converts scss to css
    uglifycss = require('gulp-uglifycss'), // Uglifies compiled css
    plug = require('gulp-load-plugins')({ lazy: true }),
    babel = require('babel-core/register'),
    chalk = require("chalk"); // Adds colors to log/messages for better legibility


/*******************************
 * Setting up task variables
 *******************************/
var root = './public/',
    styleSource= './src/sass/*.scss',
    jsEntry = './src/scripts/index.js'
    bundleName = 'bundle',
    scriptSource = ['./src/scripts/**/*.js'],
    unitTest = './test/**/*.js',
    bundleDest = './public/js',
    styleDest = './public/css/',


gulp.task('default', ['watch']); // watch and connect not applicable currently

// Builds and watches the folders for changes
gulp.task('watch', ['build-dev','styles', 'connect'], function () {
    gulp.watch(scriptSource, ['build-dev']);
    gulp.watch(styleSource, ['styles']);
    displayMessage('WatchingFiles');
    displayMessage(`################################################################################################
    Did you run $ npm start? The express server must be running for API to work
     `);
});

// Creates bundle for development. Has all the debugs turned on
gulp.task('build-dev', function () {

    return browserify({entries: jsEntry, extensions: ['.js'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .on('error', function (err) {
            console.error(err);
            gutil.log(chalk.red(err));
            gutil.beep();
            this.emit('end');
        })
        .pipe(source(bundleName+'.js'))
        .pipe(gulp.dest(bundleDest))
        .on('end', function(){
            displayMessage( 'Bundle saved to: ' + bundleDest , true);
            gutil.beep()
        })
        .pipe(connect.reload());
});


// Creates bundle for production. Removes all the debug code
gulp.task('build-prod', function () {
    process.env.NODE_ENV = 'production'

    return browserify({entries: jsEntry, extensions: ['.js'], debug: false})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .on('error', function (err) {
            console.error(err);
            gutil.log(chalk.red(err));
            gutil.beep();
            this.emit('end');
        })
        .pipe(source(bundleName+'.js'))
        .pipe(gulp.dest(bundleDest))
});

// Minifies and replaces the prod bundle with new file
gulp.task('prod', ['build-prod','uglifyCss'], function() {

    gulp.src(bundleDest + '/'+ bundleName + '.js')
        .pipe(uglify())
        .pipe(rename(bundleName + '.js'))
        .pipe(gulp.dest(bundleDest))
        .on('end', function(){
            displayMessage( 'Minified file created for PRODUCTION: ' + bundleDest , true);
            gutil.beep()
    })
})


// Converts and bundles SCSS to CSS
gulp.task('styles', function() {
    gulp.src(styleSource)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(styleDest))
        .pipe(connect.reload())
        .on('end', function () {
            displayMessage('SCSS Processed')
        })
        .pipe(connect.reload())
});


// Minifies CSS
gulp.task('uglifyCss', function () {
    gulp.src('./public/css/*.css')
        .pipe(uglifycss({
            "maxLineLen": 80,
            "uglyComments": true
        }))
        .pipe(gulp.dest(styleDest))
});


// Connect to server
gulp.task('connect', function(){

    connect.server({
        root: root,
        port: 8005,
        livereload: true,
    })
    displayMessage('Starting Server');
});


// Test Unit Using Mocha and babel
gulp.task('test', function(){
    return gulp.src(unitTest, { read: false })
        .pipe(plug.mocha({
            compilers: {
                js: babel
            }
        }));
})

function displayMessage(message, lb){
    if (lb){
        return gutil.log(chalk.blue('\n ****************** \n ' + message + '\n ****************** \n'));
    }
    return gutil.log(chalk.blue(message));
}