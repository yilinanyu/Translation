"use strict"
const express = require('express');
const fs = require('fs');
const request = require('request');

let app = express();

// Basic server set up
app.set('port', (process.env.PORT || 8055));

app.use((req, res, next) => {
    let now = new Date().toString();
    let log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n');
    next();
});

app.get('/api', (req, res) => {
    const url = req.query.url
    if(url == undefined) {
        res.send({
            error: "Must submit a url"
        })
    }

    else {
        request(url, function (error, response, body) {
            if (!error) {
                res.send(body);
            } else {
                console.log("We’ve encountered an error: " + error);
                return (res.send({error: `Oops! was able to get data from this page. Error: ${error}`}))
            }
        });
    }
})

app.get('/bad', (req,res) => {
    res.send({
        errorMessage: "Unable to handle request"
    })
})

// Maintenance mode
// app.use((req, res, next) => {
//     res.send('<h1>Site Under Maintenance</h1>')
// })





app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

