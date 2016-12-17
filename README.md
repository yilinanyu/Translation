# React, Redux for Heroku
    A simple boilerplate for app for Heroku using React and Redux. There are few ways to deploy application to Heroku. This application bundles the application instead letting Heorku bundle it for us. 
    There are two advantages of doing it this way a) we can seperate "dependencies" vs "devDependencies". Heorku doesn't install node modules that in "devDependencies". b) The builds are done very fast and we don't need to worry about post push process.
    
    
# Dev Build
    $ gulp 
    The deffult gulp task is dev mode. It has debug and runs gulp-connect. If you update the port on connect task please update the port on the sever.js as well.
    
# Prod Build
    $ gulp prod
    The prod task created a minfied version of the js and css. Please run the $ gulp before running the $ gulp prod


