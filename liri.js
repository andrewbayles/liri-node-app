require("dotenv").config();

// Load date-fns (Moment)
var isToday = require('date-fns/is_today');

// Load the fs package to read and write
var fs = require("fs");

// Load Axios
var axios = require("axios");

// Load API keys
const keys = require("./keys.js");

// Load Spotify API
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

//const ticketmaster = new Ticketmaster(keys.ticketmaster);

var action = process.argv[2];
var value = process.argv[3];


switch (action) {
    case "search-concerts":
        searchConcerts(value);
        break;
    
    case "search-songs":
        searchSongs(value);
        break;
    
    case "search-movies":
        searchMovies(value);
        break;
    
    case "feeling-lucky":
        feelingLucky();
        break;
}


function searchConcerts(value) {
    if (!value) {
        console.log("Please provide an artist name.");
    } else {

        axios.get("https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + value + "&apikey=" + keys.ticketmaster.id).then(
            function(response) {
                console.log("Axios is running.");
                console.log(response);
            }
        );

    }
}

function searchSongs(value) {
    if (!value) {
        console.log("Please provide a song name.");
    } else {

        spotify.search({ type: 'track', query: value }, function(err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }

            console.log(data); // This is returning far too many records. How to filter them down?

        });

    }
}

function searchMovies(value) {
    if (!value) {
        value = "Mr. Nobody";
    }
    value = value.replace(' ', '+');
    axios.get("http://www.omdbapi.com/?t=" + value + "&apikey=trilogy").then(
        function(response) {
            console.log("Title: " + response.data.Title);
            console.log("Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
            console.log("Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
        }
    );
}

function feelingLucky() {
    
}