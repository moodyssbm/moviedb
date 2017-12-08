#!/usr/bin/env node

// Run this to convert movies.json to movies.js

let fs = require('fs');
let movies = require('./movies.json');

let movieString = JSON.stringify(movies);

let output = "let db = " + movieString;

fs.writeFile("./movies.js", output, function(err) {
    if(err) { console.log(err); }
});