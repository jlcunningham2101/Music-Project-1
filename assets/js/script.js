var apiKey = ("AIzaSyDl7y_TqRCoUxoKJ8d5CPkotvqL4J94ydU") //dans youtube api
var apiKey2 = ("94f0bce60423d35a4236cdb67e3e5251") //dans musix api

fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=hip-hop&key=AIzaSyDl7y_TqRCoUxoKJ8d5CPkotvqL4J94ydU')

.then(res => res.json())

.then(data => console.log(data))