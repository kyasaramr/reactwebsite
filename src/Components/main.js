var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
    }
});

xhr.open("GET", "https://dev132-cricket-live-scores-v1.p.rapidapi.com/matches.php?completedlimit=5&inprogresslimit=5&upcomingLimit=5");
xhr.setRequestHeader("x-rapidapi-host", "dev132-cricket-live-scores-v1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "d6f6ee1788msh6cb60f7a3562c20p1126e0jsn5a0187978f19");

xhr.send(data);