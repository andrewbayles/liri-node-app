### Liri Bot

## Overview

Liri Bot is a simple CLI application that takes a series of simple commands and their respective arguments, interacts with various APIs depending on the user command, and returns information about various media sources. The commands Liri Bot is capable of taking are:

* search-concerts
* search-songs
* search-movies

as well as a special command called

* feeling-lucky

...which runs a randomly selected user command based on the contents of a text file.

## Commands

# search-concerts (artist)
This command takes an artist as an argument, and returns the details of upcoming events and their venues relevant to that artist.

# search-songs (track)
Search-songs takes a track title and artist as an argument, returning details about the most relevant track in the system.

# search-movies (title)
The last command, search-movies, takes a movie title as an argument and returns details about that movie. Since movies tend to be more distinctly titled than audio tracks, this command has the best chance of returning the sought-after work.

## APIs Incorporated

* OMDb's Discovery v2
* Ticketmaster
* Spotify Developer