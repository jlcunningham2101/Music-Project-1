// click function for the search button, which submits the user input
var searchButton = document.getElementById("search-btn");
// console.log(searchButton);

searchButton.addEventListener("click", function(event) {
    event.preventDefault();
    // console.log("click");
    // console.log(this);
    var userInput = document.getElementById("input-box").value;
    console.log(userInput);
})

var apiKey = ("AIzaSyDl7y_TqRCoUxoKJ8d5CPkotvqL4J94ydU") //dans youtube api

fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=hip-hop&key=AIzaSyDl7y_TqRCoUxoKJ8d5CPkotvqL4J94ydU')

.then(res => res.json())

.then(data => console.log(data))