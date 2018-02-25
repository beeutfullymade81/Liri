var request = require('request');
var Spotify = require('node-spotify-api');
require('dotenv').config()
var keys = require('./keys.js');
var Twitter = require('twitter');
var fs = require("fs");
//console.log(keys);

var client = new Twitter(keys.twitter)

if (process.argv[2] === 'my-tweets') {
    var params = { screen_name: 'nodejs' };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            // console.log(tweets);
            for (let i = 0; i < tweets.length; i++) {
                console.log(tweets[i].text);
            }
        }

    });
}


var spotify = new Spotify(keys.spotify);

function Spotified() {
    if (process.argv[2] === "spotify-this-song") {

        var songName = process.argv[3];
        spotify.search({ type: 'track', query: songName }, function (err, response) {
            if (err) {
                return console.log('Error occurred: ' + err);
            } else if (songName === process.argv[3]) {
                console.log("Artists: " + response.tracks.items[0].artists[0].name);
                console.log("Name of song: " + response.tracks.items[0].name);
                console.log("Preview: " + response.tracks.items[0].preview_url);

            } else {
                songName === "The Sign";
                console.log("Artists: " + response.tracks.items[0].artists[0].name);
                console.log(songName);
                console.log("Name of song: " + response.tracks.items[0].name);
                console.log("Preview: " + response.tracks.items[0].preview_url);
            }

        });
    }
}
if (process.argv[2] === "movie-this") {
    var movieChosen = process.argv[3];

    request("http://www.omdbapi.com/?t=" + movieChosen + "&y=&plot=short&apikey=trilogy", function (error, response, body) {
        if (movieChosen === process.argv[3]) {
            console.log("Title of move: " + JSON.parse(body).Title);
            console.log("Year released:" + JSON.parse(body).Year);
            console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Movie plot: " + JSON.parse(body).Plot);
            console.log("Actors in movie: " + JSON.parse(body).Actors);

            //console.log(JSON.parse(body));

        } else {
            movieChosen = "Mr Nobody";
            console.log("Title of move: " + JSON.parse(body).Title);
            console.log("Year released:" + JSON.parse(body).Year);
            console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Movie plot: " + JSON.parse(body).Plot);
            console.log("Actors in movie: " + JSON.parse(body).Actors);
        }


    });
}

// if (process.argv[2] === "do-what-it-says") {

    
//     })
// }
