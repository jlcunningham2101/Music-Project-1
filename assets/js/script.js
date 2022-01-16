var apiKey = "AIzaSyDl7y_TqRCoUxoKJ8d5CPkotvqL4J94ydU"; //dans youtube api . [tresha's YTapikey: AIzaSyDUf1zrEu3jheS3z-l_onSbalX3A1jQelM] [Aaron's YTAPI: AIzaSyAA6bW7Gaw16fSvi-oS4DcA2_LaqC5TGw4]
// Aaron#2: AIzaSyDyOCebB8Ue_4TdE2lgv89WmD2sazxE47w
// Jill's: AIzaSyCxHlQ0rxcjKNgTev27MpxOO5KsGfxajQ0

var audioApiKey = "523532";
var list = [];
var listMusicEl = document.getElementById("#list-Music");
var searchButton = document.getElementById("search-btn");
// console.log(searchButton);
var userInput = document.getElementById("input-box");
// console.log(userInput);
// var userInput2 = "";
var frameEl = document.querySelector("#frame-wrapper");
var errorMsgEl = "";
var albumBucketEl = "";
var artistBucketEl = "";

// Error handling - user enters no data in search box

searchButton.addEventListener("click", function (event) {
  event.preventDefault();
  // console.log("click");
  // var userInput = document.getElementById("input-box").value;
  console.log(userInput.value);
  if (userInput.value == "") {
    console.log("empty");
    frameEl = "";
    albumBucketEl = "";
    artistBucketEl = "";
    errorMsgEl = document.getElementById("top-text");
    errorMsgEl.textContent = "Please enter an artist name to run search";
    errorMsgEl.classList.add("is-size-5", "has-text-danger");
  } else {
    artistSearch();
    // searchMusic();
  }
});

//this is the fetch function for audioDB - search for artist name

function artistSearch() {
  var audioArtistUrl =
    "https://theaudiodb.com/api/v1/json/" +
    audioApiKey +
    "/search.php?s=" +
    userInput.value;

  // artist search- returns general artist info including name/bio/label/genre/picture/social media/last FM Chart
  fetch(audioArtistUrl).then(function (response) {
    var errorMsgEl = document.getElementById("top-text");
    var artistBucketEl = document.getElementById("artist-bucket");
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
        if (data.artists === null) {
                    console.log("no data found");
          albumBucketEl = "";
          artistBucketEl = "";
          errorMsgEl.textContent =
            "Couldn't find artist but check out these videos.";
          errorMsgEl.classList.add("is-size-5", "has-text-danger");
        } else {
          errorMsgEl.textContent =
            "Check out popular videos from your artist below!";
          // artistBucketEl.innerHTML = "";
          var aboutArtistHead = document.createElement("h2");
          aboutArtistHead.setAttribute("id", "artist");
          aboutArtistHead.classList.add("has-text-danger-dark");
          aboutArtistHead.textContent = "About this Artist";
          artistBucketEl.appendChild(aboutArtistHead);
          var artistNameEl = document.createElement("p");
          artistNameEl.textContent =
            "You searched for: " + data.artists[0].strArtist;
          artistNameEl.classList.add("is-size-5", "has-text-weight-bold");
          artistBucketEl.appendChild(artistNameEl);
          var artistBioEl = document.createElement("p");
          artistBioEl.textContent = data.artists[0].strBiographyEN;
          artistBioEl.classList.add(
            "is-size-5",
            "has-text-weight-medium",
            "is-half"
          );
          artistBucketEl.appendChild(artistBioEl);
          var artistGenreEl = document.createElement("p");
          artistGenreEl.textContent = "Genre: " + data.artists[0].strGenre;
          artistGenreEl.classList.add("is-size-5", "has-text-weight-bold");
          artistBucketEl.appendChild(artistGenreEl);
          var artistLabelEl = document.createElement("p");
          artistLabelEl.textContent = "Label: " + data.artists[0].strLabel;
          artistLabelEl.classList.add("is-size-5", "has-text-weight-bold");
          artistBucketEl.appendChild(artistLabelEl);

          var artistSocialMediaEl = document.createElement("a");
          artistSocialMediaEl.setAttribute("href", data.artists[0].strFacebook);
          artistSocialMediaEl.classList.add(
            "is-size-5",
            "has-text-weight-bold"
          );
          artistBucketEl.appendChild(artistSocialMediaEl);

          var artistLastFmChartEl = document.createElement("a");
          artistLastFmChartEl.setAttribute(
            "href",
            data.artists[0].strLastFMChart
          );
          artistLastFmChartEl.classList.add(
            "is-size-5",
            "has-text-weight-bold"
          );
          artistBucketEl.appendChild(artistLastFmChartEl);

          var artistPictureEl = document.createElement("img");
          artistPictureEl.setAttribute("src", data.artists[0].strArtistBanner);
          artistPictureEl.setAttribute("alt", data.artists[0].strArtistBanner);
          artistBucketEl.appendChild(artistPictureEl);
        }

        //calls the album search function
        albumCall();
      });
    }
  });
}

// album search- returns a list of albums, yr release, & description & intl sales, artist picture
var albumCall = function () {
  try {
    var userInput = document.getElementById("input-box").value;
    var albumBucketEl = document.getElementById("album-bucket");
    var errorMsgEl = document.getElementById("top-text");
    // console.log(userInput);

    var audioAlbumUrl =
      "https://theaudiodb.com/api/v1/json/" +
      audioApiKey +
      "/searchalbum.php?s=" +
      userInput;
    console.log(audioAlbumUrl);
    fetch(audioAlbumUrl).then(function (response) {
      console.log(response);
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
          if (data.album === null) {
            console.log("no data found");
            albumBucketEl = "";
            artistBucketEl = "";
            errorMsgEl.textContent =
              "Couldn't find artist but check out these videos.";
            errorMsgEl.classList.add("is-size-5", "has-text-danger");
          } else {
            albumBucketEl.innerHTML = "";
            var aboutAlbumHead = document.createElement("h2");
            aboutAlbumHead.setAttribute("id", "albums");
            aboutAlbumHead.classList.add("has-text-danger-dark");
            aboutAlbumHead.textContent = "Album Information";
            albumBucketEl.appendChild(aboutAlbumHead);
            for (var i = 0; i < data.album.length; i++) {
              var albumNameEl = document.createElement("p");
              albumNameEl.textContent =
                "Album Name : " + data.album[i].strAlbum;
              albumNameEl.classList.add("is-size-5", "has-text-weight-bold");
              albumBucketEl.appendChild(albumNameEl);
              var albumYrEl = document.createElement("p");
              albumYrEl.textContent =
                "RELEASED: " + data.album[i].intYearReleased;
              albumYrEl.classList.add("is-size-5", "has-text-weight-bold");
              albumBucketEl.appendChild(albumYrEl);
              var albumDescrEl = document.createElement("p");
              albumDescrEl.textContent =
                "DESCRIPTION: " + data.album[i].strDescriptionEN;
              albumDescrEl.classList.add("is-size-5", "has-text-weight-medium");
              albumBucketEl.appendChild(albumDescrEl);

              var albumImageEl = document.createElement("img");
              albumImageEl.setAttribute("src", data.album[i].strAlbumThumb);
              albumImageEl.setAttribute(
                "alt",
                "Image of " + data.album[i].strAlbum
              );
              albumBucketEl.appendChild(albumImageEl);
            }
          }
        });
      }
    });
  } catch (error) {
    alert(error);
    console.log(error);
  }
};

// function fetches from youtube api

function searchMusic(event) {
  // event.preventDefault();
  // console.log("click");
  // console.log(this);

  var search = userInput.value.trim();
  // console.log(search);

  var youtubeApiKey = "AIzaSyCxHlQ0rxcjKNgTev27MpxOO5KsGfxajQ0";
  var youtubeApiUrl =
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=" +
    search +
    "&key=" +
    youtubeApiKey;

  fetch(youtubeApiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(response);
      frameEl.innerHTML = "";

      frameEl.classList.add("mx-5", "px-3");

      //array of videos
      var searchVideos = [];
      for (var item of data.items) {
        searchVideos.push(item.id.videoId);

        var ytVideo = document.createElement("iframe");
        ytVideo.setAttribute(
          "src",
          `https://www.youtube.com/embed/${item.id.videoId}`
        );
        frameEl.append(ytVideo);
      }
    })
    .catch(function (err) {
      res.json(err);
    });
}

// function to clear the page and start a new search
var resetBtn = document.getElementById("clear-search");
resetBtn.addEventListener("click", function (event) {
  var artistBucketEl = document.getElementById("artist-bucket");
  var albumBucketEl = document.getElementById("album-bucket");
  event.preventDefault();
  console.log("click");
  albumBucketEl.innerHTML = "";
  artistBucketEl.innerHTML = "";
  frameEl.innerHTML = "";
  errorMsgEl = "";
  document.getElementById("input-box").value = "";
});

//The button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button it scrolls to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function myFunction() {
  var element = document.body;
  var toggle = element.classList.toggle("dark-mode");

  localStorage.setItem("darkMode", toggle);
}

function toggle() {
  var toggleVal = localStorage.getItem("darkMode");
  console.log(toggleVal);
  if (toggleVal === "true") {
    var element = document.body;
    var toggle = element.classList.toggle("dark-mode");
  }
}
toggle();

// to clear video, src = "", add a generic placeholder
// to clear paragraphs , textcontent = ""

searchButton.addEventListener("click", searchMusic);
