require("dotenv").config();

// Load the fs package to read and write
var fs = require("fs");

const keys = require("./keys.js");

const spotify = new Spotify(keys.spotify);

// Take two arguments.
// The first will be the action (i.e. "search-movies", "search-concerts", etc.)
// The second will be the searched for item (i.e. song, artist, movie, etc.)
var action = process.argv[2];
var value = process.argv[3];


switch (action) {
    case "search-concerts":
        searchConcerts();
        break;
    
    case "search-songs":
        searchSongs();
        break;
    
    case "search-movies":
        searchMovies();
        break;
    
    case "feeling-lucky":
        feelingLucky();
        break;
}


function searchConcerts() {

}

function searchSongs() {
    
}

function searchMovies() {
    
}

function feelingLucky() {
    
}