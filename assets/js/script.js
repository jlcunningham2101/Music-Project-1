// click function for the search button, which submits the user input
// var searchButton = document.getElementById("search-btn");
// // console.log(searchButton);
var apiKey = "AIzaSyDl7y_TqRCoUxoKJ8d5CPkotvqL4J94ydU" //dans youtube api
var audioApiKey = "523532";
var list = []
var listMusicEl = document.getElementById('#list-Music')
var searchButton = document.getElementById("search-btn");
// console.log(searchButton);

// console.log(userInput);

var userInput = document.getElementById("input-box");
var userInput2 = "";

searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    // console.log("click");
    // console.log(this);
    var userInput = document.getElementById("input-box").value;
    console.log(userInput);


    //this is the fetch function for audioDB - search for artist name
    var audioArtistUrl = "https://theaudiodb.com/api/v1/json/" + audioApiKey + "/search.php?s=" + userInput;
    // var audioTrackUrl = "https://theaudiodb.com/api/v1/json/" + audioApiKey + "/searchtrack.php?s=" + userInput + userInput2; // requires 2 inputs

    // artist search- returns general artist info including name/bio/label/genre
    fetch(audioArtistUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    var artistBucketEl = document.getElementById("artist-bucket");
                    var artistNameEl = document.createElement("p");
                    artistNameEl.textContent = "You searched for: " + data.artists[0].strArtist;
                    artistNameEl.classList.add("is-size-5", "has-text-weight-bold")
                    artistBucketEl.appendChild(artistNameEl);
                    var artistBioEl = document.createElement("p");
                    artistBioEl.textContent = data.artists[0].strBiographyEN;
                    artistBioEl.classList.add("is-size-5", "has-text-weight-medium")
                    artistBucketEl.appendChild(artistBioEl);
                    var artistGenreEl = document.createElement("p");
                    artistGenreEl.textContent = "Genre: " + data.artists[0].strGenre;
                    artistGenreEl.classList.add("is-size-5", "has-text-weight-bold")
                    artistBucketEl.appendChild(artistGenreEl);
                    var artistLabelEl = document.createElement("p");
                    artistLabelEl.textContent = "Label: " + data.artists[0].strLabel;
                    artistLabelEl.classList.add("is-size-5", "has-text-weight-bold")
                    artistBucketEl.appendChild(artistLabelEl);

                    albumCall();

                });

            }
        });

})

// album search- returns a list of albums, yr release, review & description & intl sales
var albumCall = function () {
    var audioAlbumUrl = "https://theaudiodb.com/api/v1/json/" + audioApiKey + "/searchalbum.php?s=" + userInput;
    fetch(audioAlbumUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    var albumBucketEl = document.getElementById("album-bucket");
                    var albumNameEl = document.createElement("p");
                    albumNameEl.textContent = "Album#1: " + data.album[0].strAlbum;
                    albumNameEl.classList.add("is-size-5", "has-text-weight-bold")
                    albumBucketEl.appendChild(albumNameEl);
                    var albumYrEl = document.createElement("p");
                    albumYrEl.textContent = "Released: " + data.album[0].intYearReleased;
                    albumYrEl.classList.add("is-size-5", "has-text-weight-bold")
                    albumBucketEl.appendChild(albumYrEl);
                    var albumDescrEl = document.createElement("p");
                    albumDescrEl.textContent = "Released: " + data.album[0].strDescriptionEN;
                    albumDescrEl.classList.add("is-size-5", "has-text-weight-bold")
                    albumBucketEl.appendChild(albumDescrEl);
                    var albumRevwEl = document.createElement("p");
                    albumRevwEl.textContent = "Released: " + data.album[0].strReview;
                    albumRevwEl.classList.add("is-size-5", "has-text-weight-bold")
                    albumBucketEl.appendChild(albumRevwEl);
                })
            }

            // albumApiUrl - works, search is slow
            // album data we can use: data.album[i].intSales, intYearReleased, strAlbum(album-name), strArtist, strDescriptionEN (album-info), strReview, strWikipediaID
            // can we find a way to iterate through this data to pull out the info we want to display? 

            // else {
            //     // alert("Error: Artist not found.");   // not allowed to use alerts- modals?
            // }
            // })
            // .catch(function(error) {
            // // alert("Unable to connect AudioDB") // again, not allowed to use alerts
            // console.log(error);
            // }); 
        })
};
//     //this is the fetch function for audioDB - search for artist and song
//     var audioApiKey = "523532";
//     var artistName = userInput; // to be linked to search bar for artist name
//     var singleName = userInput2; // to be linked to search bar for track name
//     fetch( + "&t=" + userInput2)
//         .then(res => res.json())
//         .then(data => console.log(data))

// })

// youtube api search begins

// function shows localStorage- search results appears under search bar, userinput dynamically updates array
// var showLocal = function () {
//     list = JSON.parse(localStorage.getItem("name"))
//     if (!list) {
//         list = []
//     }
//     // listMusicEl.innerHTML = "";
//     // for (var i = 0; i < list.length; i++) {
//     //     listMusic(list[i])
//     // }
// // }

// function featches from youtube api

function searchMusic(event) {
    event.preventDefault();
    // console.log("click");
    // console.log(this);

    console.log(userInput.value.trim());
    var search = userInput.value.trim()
    var youtubeApiKey = "AIzaSyDl7y_TqRCoUxoKJ8d5CPkotvqL4J94ydU";
    var youtubeApiUrl = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=" + search + "&key=" + youtubeApiKey;



    fetch(youtubeApiUrl)
        .then(function (response) {
            return response.json()
        }
        ).then(function (data) {
            console.log(data.items);

            // var thumbnailEl = document.getElementById("list-music");
            // var thumb1El = document.createElement("li");
            // thumb1El.textContent = "See: " + data[0].snippet.thumbnails.high.
            // // albumNameEl.classList.add("is-size-5", "has-text-weight-bold")
            // thumb1El.appendChild(thumbnailEl);




            // if (list.indexOf() === -1) {   //took out description from function
            //     list.push()
            //     localStorage.setItem("name", JSON.stringify(list));

            //     showLocal()
            // }
            // }).catch(function (err) {
            //     res.json(err)
        })
}

// // 2. This code loads the IFrame Player API code asynchronously.
// var tag = document.createElement('script');

// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// // 3. This function creates an <iframe> (and YouTube player)
// //    after the API code downloads.
// var player;
// function onYouTubeIframeAPIReady() {
//     player = new YT.Player('player', {
//         height: '390',
//         width: '640',
//         videoId: 'M7lc1UVf-VE',
//         playerVars: {
//             'playsinline': 1
//         },
//         events: {
//             'onReady': onPlayerReady,
//             'onStateChange': onPlayerStateChange
//         }
//     });
// }

// // 4. The API will call this function when the video player is ready.
// function onPlayerReady(event) {
//     event.target.playVideo();
// }

// // 5. The API calls this function when the player's state changes.
// //    The function indicates that when playing a video (state=1),
// //    the player should play for six seconds and then stop.
// var done = false;
// function onPlayerStateChange(event) {
//     if (event.data == YT.PlayerState.PLAYING && !done) {
//         setTimeout(stopVideo, 6000);
//         done = true;
//     }
// }
// function stopVideo() {
//     player.stopVideo();
// }

// // var listMusic = function (musicIn) {

// //     var firstS = document.createElement("button")
// //     firstS.classList = " list-group-item list-group-item-action";

// //     firstS.textContent = musicIn;
// //     listMusicEl.appendChild(firstS)
// // } 

// // document.getElementById("list-Music").addEventListener("click", function (event) {

// //     searchMusic(event.target.textContent);

// // })

// // document.getElementById("search-btn").addEventListener("click", function (event) {
// //     event.preventDefault();


// //     var musicIn = document.getElementById("input-box").value;
// //     document.getElementById("input-box").value = "";

// //     if (musicIn) {

// //         searchMusic(musicIn);

// //     }
// // });



searchButton.addEventListener("click", searchMusic);


// .then(data => console.log(data))




