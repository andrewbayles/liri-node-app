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
                console.log(response); // Getting response status 200, unable to make sense of returned data.
            }
        );

    }
}

function searchSongs(value) {
    if (!value) {
        value = "Ace of Base The Sign";
    } 
    spotify.search({ type: 'track', query: value, limit: 1 }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log("Artists: " + data.tracks.items[0].artists[0]); // Cannot seem to get this to work.
        console.log("Song Name: " + data.tracks.items[0].name);
        console.log("Preview Link: " + data.tracks.items[0].preview_url);
        console.log("Album: " + data.tracks.items[0].album.name);
    });
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
    // Using FS, read contents of random.txt (which contents)?
    // Use the contents to call one of Liri's commands (which command)?

}

// This is for testing Git.