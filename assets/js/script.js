fetch('https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyDl7y_TqRCoUxoKJ8d5CPkotvqL4J94ydU&fields=items(id,snippet(channelId,title,categoryId),statistics)&part=snippet,statistics')

.then(res => res.json())

.then(data => console.log(data))