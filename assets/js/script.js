// click function for the search button, which submits the user input
// var searchButton = document.getElementById("search-btn");
// // console.log(searchButton);

// searchButton.addEventListener("click", function(event) {
//     event.preventDefault();
//     // console.log("click");
//     // console.log(this);
//     var userInput = document.getElementById("input-box").value;
//     console.log(userInput);
// })
//this is the fetch function for audioDB - search for artist name
var audioApiKey = "523532";
fetch("https://theaudiodb.com/api/v1/json/523532/search.php?s="userInput"")
.then(res => res.json())
.then(data => console.log(data))

//this is the fetch function for audioDB - search for artist and song
var audioApiKey = "523532";
var artistName = userInput
var singleName = userInput2
fetch("https://theaudiodb.com/api/v1/json/523532/searchtrack.php?s="userInput"&t="userInput2"")
.then(res => res.json())
.then(data => console.log(data))
// var apiKey = ("AIzaSyDl7y_TqRCoUxoKJ8d5CPkotvqL4J94ydU") //dans youtube api

// fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=hip-hop&key=AIzaSyDl7y_TqRCoUxoKJ8d5CPkotvqL4J94ydU')

// .then(res => res.json())

// .then(data => console.log(data))

var apiKey = ("AIzaSyDl7y_TqRCoUxoKJ8d5CPkotvqL4J94ydU") //dans youtube api
var list = []
var listMusicEl = document.getElementById('#list-Music')
// click function for the search button, which submits the user input
var searchButton = document.getElementById("search-btn");
// console.log(searchButton);
var userInput = "";
    // console.log(userInput);

// searchButton.addEventListener("click", function(event) {
//     event.preventDefault();
//     // console.log("click");
//     // console.log(this);
//     var userInput = document.getElementById("input-box").value;
//     console.log(userInput);
// })

var showLocal = function() {
    list = JSON.parse(localStorage.getItem("name"))
    if (!list) {
        list = []
    }
    listMusicEl.innerHTML = "";
    for (var i = 0; i < list.length; i++) {
        listMusic(list[i])
    }
}

// music information
function searchMusic(description) {
    console.log(description)
fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=hip-hop&key=AIzaSyDUf1zrEu3jheS3z-l_onSbalX3A1jQelM')

.then(function (response) {
    if (response.ok) {
        response.json().then(function (data) {
            if (list.indexOf(description) ===-1) {
                list.push(description)
                localStorage.setItem("name", JSON.stringify(list));

                showLocal()
            }
        })
    }
} 

// .then(data => console.log(data))

)


}

// function for the music you search
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

showLocal();

    //this is the fetch function for audioDB
    var audioApiKey = "523532";
    fetch("https://theaudiodb.com/api/v1/json/" + audioApiKey + "/search.php?s=" + userInput)

    .then(res => res.json())

    .then(data => console.log(data))

    // youtube call works but has a quota! commented out while i work on the other api

    // var apiKey = ("AIzaSyDl7y_TqRCoUxoKJ8d5CPkotvqL4J94ydU") //dans youtube api

    // fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=hip-hop&key=AIzaSyDl7y_TqRCoUxoKJ8d5CPkotvqL4J94ydU')

    // .then(res => res.json())

    // .then(data => console.log(data))
})


// this is the spotify fetch request, but I couldn't generate an access token

// var client_id = 'b45a9a90948f434ba96a88c861bd2a98';
// var redirect_uri = 'http://localhost:8888/callback';

// var state = generateRandomString(16);

// localStorage.setItem(stateKey, state);
// var scope = 'user-read-private user-read-email';

// var url = 'https://accounts.spotify.com/authorize';
// url += '?response_type=token';
// url += '&client_id=' + encodeURIComponent(client_id);
// url += '&scope=' + encodeURIComponent(scope);
// url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
// url += '&state=' + encodeURIComponent(state);

// var accessToken="b45a9a90948f434ba96a88c861bd2a98";
// fetch("https://api.spotify.com/v1/artists/" + userInput, {
//             method: 'GET', headers: {
//                 // 'Accept': 'application/json',
//                 // 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer ' + accessToken
//             }
//         })
//             .then((response) => {
//                 console.log(response.json().then(
//                     (data) => { console.log(data) }
//                 ));
//             }


