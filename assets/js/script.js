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
        .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
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
var albumCall = function() {
    var audioAlbumUrl = "https://theaudiodb.com/api/v1/json/" + audioApiKey + "/searchalbum.php?s=" + userInput;
    fetch(audioAlbumUrl)
        .then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
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


        // albumApiUrl - works, search is slow
        // album data we can use: data.album[i].intSales, intYearReleased, strAlbum(album-name), strArtist, strDescriptionEN (album-info), strReview, strWikipediaID
        // can we find a way to iterate through this data to pull out the info we want to display? 
        })
    } 
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
    var youtubeApiUrl= "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=playlist&q=" + search + "&key=" + youtubeApiKey;
   
        
        fetch(youtubeApiUrl)
            .then(function (response) {
                return response.json()
            }
            ).then(function (data) {
                console.log(data.items);
                // if (list.indexOf() === -1) {   //took out description from function
                //     list.push()
                //     localStorage.setItem("name", JSON.stringify(list));

                //     showLocal()
                // }
            }).catch(function (err) {
                res.json(err)
            })
    }

    // var listMusic = function (musicIn) {

    //     var firstS = document.createElement("button")
    //     firstS.classList = " list-group-item list-group-item-action";

    //     firstS.textContent = musicIn;
    //     listMusicEl.appendChild(firstS)
    // } 
    
    // document.getElementById("list-Music").addEventListener("click", function (event) {

    //     searchMusic(event.target.textContent);

    // })

    // document.getElementById("search-btn").addEventListener("click", function (event) {
    //     event.preventDefault();


    //     var musicIn = document.getElementById("input-box").value;
    //     document.getElementById("input-box").value = "";

    //     if (musicIn) {

    //         searchMusic(musicIn);

    //     }
    // });

   

searchButton.addEventListener("click", searchMusic);


// .then(data => console.log(data))




