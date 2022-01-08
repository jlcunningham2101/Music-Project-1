// click function for the search button, which submits the user input
var searchButton = document.getElementById("search-btn");
// console.log(searchButton);

searchButton.addEventListener("click", function(event) {
    event.preventDefault();
    // console.log("click");
    // console.log(this);
    var userInput = document.getElementById("input-box").val();
    console.log(userInput);
})

var apiKey = ("AIzaSyDl7y_TqRCoUxoKJ8d5CPkotvqL4J94ydU") //dans youtube api
var apiKey2 = ("94f0bce60423d35a4236cdb67e3e5251") //dans musix api

fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=hip-hop&key=AIzaSyDl7y_TqRCoUxoKJ8d5CPkotvqL4J94ydU')

.then(res => res.json())

.then(data => console.log(data))