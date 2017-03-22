var newstitle = document.getElementById('news-title');
var play = true;
var slideCounter = 0;
var articleStorage;
var timer;
var article1 = document.getElementById("article1");
var article2 = document.getElementById("article2");
var article3 = document.getElementById("article3");
var title1 = document.getElementById("title1");
var title2 = document.getElementById("title2");
var title3 = document.getElementById("title3");
var playpause = document.getElementById("play-pause");

//Next article render
function renderNext(data) {
    article3.style.display = "none";
    article2.style.display = "none";
    article1.style.display = "none";    
    localStorage.articleNumber = Number(slideCounter % 3) + 1;
    clearTimeout(timer);
    slideCounter += 1;
    if (slideCounter % 3 == 0) {
        article1.style.display = "block";
        $("#article1").delay(2000).fadeOut(1000);
    } else if (slideCounter % 3 == 1) {
        article2.style.display = "block";
        $("#article2").delay(2000).fadeOut(1000);
    } else if (slideCounter % 3 == 2) {
        article3.style.display = "block";
        $("#article3").delay(2000).fadeOut(1000);
    }
    var article = data.articles[slideCounter % 3].text;
    var title = data.articles[slideCounter % 3].title;
    //newstitle.innerHTML = title;
    //feed.innerHTML = article;
    if (play == true) {
        timer = setTimeout(function () {renderNext(articleStorage); }, 3000);
    }
    console.log(localStorage.articleNumber);
    console.log(slideCounter % 3);
}

//Initial render
function render(data) {
        article3.style.display = "none";
        article2.style.display = "none";
        article1.style.display = "none";
    
    if (slideCounter % 3 == 0) {
        article1.style.display = "block";
        $("#article1").delay(10000).fadeOut(1000);
    } else if (slideCounter % 3 == 1) {
        article2.style.display = "block";
        $("#article2").delay(10000).fadeOut(1000);
    } else if (slideCounter % 3 == 2) {
        article3.style.display = "block";
        $("#article3").delay(10000).fadeOut(1000);
    }
    
    if (typeof(Storage) !== "undefined") {
        if (localStorage.articleNumber) {
            localStorage.articleNumber = (Number(localStorage.articleNumber)) % 3;
        } else {
            localStorage.articleNumber = 0;
        }
    }
    articleStorage = data;
    var article = data.articles[Number(localStorage.articleNumber) % 3].text;
    var title = data.articles[localStorage.articleNumber % 3].title;
    
    //newstitle.innerHTML = title;
    //feed.innerHTML = article;
    if (play == true) {
        timer = setTimeout(function () {renderNext(articleStorage); }, 3000);
    }
}








//Load articles from firebase
window.addEventListener("load", function () {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://kuoppam2.firebaseio.com/.json');
    request.onload = function () {
        var articleData = JSON.parse(request.responseText);
        console.log(articleData);
        var articleNum = localStorage.getItem("articleNumber");
        if (articleNum == 1 || articleNum == 2) {slideCounter = articleNum; } else {slideCounter = 0; }
        render(articleData);  
        news1.innerHTML = articleData.articles[0].text;
        news2.innerHTML = articleData.articles[1].text;
        news3.innerHTML = articleData.articles[2].text;
        title1.innerHTML = articleData.articles[0].title;
        title2.innerHTML = articleData.articles[1].title;
        title3.innerHTML = articleData.articles[2].title;
    };
    request.send();
});

//Toggle play on and off
function playToggle() {
    if (play == false) {
        play = true;
        timer = setTimeout(function () {renderNext(articleStorage); }, 3000);
        playpause.style.backgroundImage = "url('play.png')";
    } else {
        play = false;
        clearTimeout(timer);
        playpause.style.backgroundImage = "url('pause.png'')";
    }
    
}
    
//Next article
function next() {
    renderNext(articleStorage);
}

//Previous article
function previous() {
    slideCounter += 1;
    renderNext(articleStorage);
}





