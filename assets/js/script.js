
var apiKey = "AIzaSyDl7y_TqRCoUxoKJ8d5CPkotvqL4J94ydU" //dans youtube api
var audioApiKey = "523532";
var list = []
var listMusicEl = document.getElementById('#list-Music')
var searchButton = document.getElementById("search-btn");
// console.log(searchButton);
var userInput = document.getElementById("input-box");
// console.log(userInput);
var userInput2 = "";

searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    // console.log("click");
    // console.log(this);
    var userInput = document.getElementById("input-box").value;
    // console.log(userInput);


    //this is the fetch function for audioDB - search for artist name
    
    var audioArtistUrl = "https://theaudiodb.com/api/v1/json/" + audioApiKey + "/search.php?s=" + userInput;
    // var audioTrackUrl = "https://theaudiodb.com/api/v1/json/" + audioApiKey + "/searchtrack.php?s=" + userInput + userInput2; // requires 2 inputs
        
    // artist search- returns general artist info including name/bio/label/genre/picture/social media/last FM Chart
    fetch(audioArtistUrl)
        .then(function(response) {
            // console.log(response);
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
        // var artistPictureEl = document.createElement("p");
        // artistPictureEl.textContent = "Picture: " + data.artists[0].strBanner;
        // artistPictureEl.classList.add("is-size-5", "has-text-weight-bold")
        // artistBucketEl.appendChild(artistPictureEl);
        // var artistSocialMediaEl = document.createElement("p");
        // artistSocialMediaEl.textContent = "Social Media: " + data.artists[0].strFacebook;
        // artistSocialMediaEl.classlist.add("is-size-5", "has-text-weight-bold")
        // artistBucketEl.appendChild(artistSocialMediaEl);
        // var artistLastFmChartEl = document.createElement("p");
        // artistLastFmChartEl.textContent = "Last FM Chart: " + data.artists[0].strLastFMChart;
        // artistLastFmChartEl.classlist.add("is-size-5", "has-text-weight-bold")
        // artistBucketEl.appendChild(artistLastFmChartEl);

        //calls the album search function
        albumCall();

        });

    }
});

})

// album search- returns a list of albums, yr release, review & description & intl sales, artist picture
var albumCall = function() {
    
        try {
            var userInput = document.getElementById("input-box").value;
            console.log(userInput.value);

            var audioAlbumUrl = "https://theaudiodb.com/api/v1/json/" + audioApiKey + "/searchalbum.php?s=" + userInput;
                
                fetch(audioAlbumUrl).then(function(response) {
                    console.log(response);
                        if(response.ok) {
                            response.json().then(function(data) {
                                console.log(data);
                                var albumBucketEl = document.getElementById("album-bucket");
                                var albumNameEl = document.createElement("p");
                                albumNameEl.textContent = "Album#1: " + data.album[0].strAlbum;
                                albumNameEl.classList.add("is-size-5", "has-text-weight-bold")
                                albumBucketEl.appendChild(albumNameEl);
                                var albumYrEl = document.createElement("p");
                                albumYrEl.textContent = "RELEASED: " + data.album[0].intYearReleased;
                                albumYrEl.classList.add("is-size-5", "has-text-weight-bold")
                                albumBucketEl.appendChild(albumYrEl);
                                var albumDescrEl = document.createElement("p");
                                albumDescrEl.textContent = "DESCRIPTION: " + data.album[0].strDescriptionEN;
                                albumDescrEl.classList.add("is-size-5", "has-text-weight-medium")
                                albumBucketEl.appendChild(albumDescrEl);
                                var albumRevwEl = document.createElement("p");
                                albumRevwEl.textContent = "REVIEWS: " + data.album[0].strReview;
                                albumRevwEl.classList.add("is-size-5", "has-text-weight-medium")
                                albumBucketEl.appendChild(albumRevwEl);
                                // artistPictureEl.textContent = "Picture: " + data.artists[0].strBanner;
                                // artistPictureEl.classList.add("is-size-5", "has-text-weight-bold")
                                // artistBucketEl.appendChild(artistPictureEl);


                            });
                        }    
                    });
                }
                
                catch(error) {
                    alert(error); 
                    console.log(error);
                };


    }


// function fetches from youtube api

function searchMusic(event) { 
    // event.preventDefault();
    // console.log("click");
    // console.log(this);
        
    var search = userInput.value.trim()
    // console.log(userInput.value.trim());
    var youtubeApiKey = "AIzaSyDl7y_TqRCoUxoKJ8d5CPkotvqL4J94ydU";
    var youtubeApiUrl= "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=" + search + "&key=" + youtubeApiKey;
   
        
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
                //array of videos 
                var searchVideos = [data.items[0].id.videoId, data.items[1].id.videoId, data.items[2].id.videoId, data.items[3].id.videoId, data.items[4].id.videoId];
                //a function to get a random search term
                var getVideo = () => searchVideos[Math.floor(Math.random() * (searchVideos.length-1))];
                document.querySelector(".iframeClass").src = "https://www.youtube.com/embed/" + getVideo();

            }).catch(function (err) {
                res.json(err)
            })
    }
   


searchButton.addEventListener("click", searchMusic);


        // 2. This code loads the IFrame Player API code asynchronously.
        var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        
            // 3. This function creates an <iframe> (and YouTube player) after the API code downloads.
        
        var player;
        function onYouTubeIframeAPIReady() {
            player = new YT.Player('player', {
                height: '390',
                width: '640',
                videoId: 'M7lc1UVf-VE',
                playerVars: {
                    'playsinline': 1
                },
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        }
        
            // 4. The API will call this function when the video player is ready.
        function onPlayerReady(event) {
            event.target.playVideo();
        }
        
            // 5. The API calls this function when the player's state changes.
                    // //    The function indicates that when playing a video (state=1),
                    // //    the player should play for six seconds and then stop.
        var done = false;
        function onPlayerStateChange(event) {
            if (event.data == YT.PlayerState.PLAYING && !done) {
                setTimeout(stopVideo, 6000);
                done = true;
            }
        }
        function stopVideo() {
            player.stopVideo();
        }
        
        var listMusic = function (musicIn) {
        
            var firstS = document.createElement("button")
            firstS.classList = " list-group-item list-group-item-action";
        
            firstS.textContent = musicIn;
            listMusicEl.appendChild(firstS)
        } 
        
        
        document.getElementById("list-Music").addEventListener("click", function (event) {
        
            searchMusic(event.target.textContent);
        
        })
        
        document.getElementById("search-btn").addEventListener("click", function (event) {
            event.preventDefault();
        
        
            var musicIn = document.getElementById("input-box").value;
            document.getElementById("input-box").value = "";
        
            if (musicIn) {
        
                searchMusic(musicIn);
        
            }
        });
        
        // function shows localStorage- search results appears under search bar, userinput dynamically updates array
        var showLocal = function () {
            list = JSON.parse(localStorage.getItem("name"))
            if (!list) {
                list = []
            }
            listMusicEl.innerHTML = "";
            for (var i = 0; i < list.length; i++) {
                listMusic(list[i])
            }
        }




