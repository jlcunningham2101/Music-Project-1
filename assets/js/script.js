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
var apiKey = ("AIzaSyDl7y_TqRCoUxoKJ8d5CPkotvqL4J94ydU") //dans youtube api
var list = []
var listMusicEl = document.getElementById('#list-Music')
var searchButton = document.getElementById("search-btn");
// console.log(searchButton);
var userInput = "";
// console.log(userInput);
var userInput2 = ""

//this is the fetch function for audioDB - search for artist name
var audioApiKey = "523532";
fetch("https://theaudiodb.com/api/v1/json/523532/search.php?s=" + userInput)
.then(res => res.json())
.then(data => console.log(data))

//this is the fetch function for audioDB - search for artist and song
var audioApiKey = "523532";
var artistName = userInput; // to be linked to search bar for artist name
var singleName = userInput2; // to be linked to search bar for track name
fetch("https://theaudiodb.com/api/v1/json/523532/searchtrack.php?s=" + userInput + "&t=" + userInput2)
.then(res => res.json())
.then(data => console.log(data))



// youtube api search begins


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



