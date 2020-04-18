function openTopic(n) {
    if (n > 0 && n < 5){
        window.sessionStorage.setItem("topicNr", n);
        window.location.href = "topicPage.html";
    }
    else if (n < 1) {
        document.getElementById("status").innerHTML = "куда блэтб, это первая тема!";
        setTimeout(function(){
            document.getElementById("status").innerHTML = '';
        }, 3000);
    } else if (n > 4) {
        document.getElementById("status").innerHTML = "куда блэтб, тем всего 4!";
        setTimeout(function(){
            document.getElementById("status").innerHTML = '';
        }, 3000);
    }
}

function sendResponse(response) {
    if (response === 1)
        response = "YES";
    else response = "NO";
    const Http = new XMLHttpRequest();
    const url='https://api.telegram.org/bot783515666:AAFJv0pFMX5T9QNLum1f0wARdvHe-zQ0pbs/getMe';
    Http.open("GET", url);
    Http.send();

    var millisecondsToWait = 1000;
    setTimeout(function() {
        // Whatever you want to do after the wait
    }, millisecondsToWait);

    const url2='https://api.telegram.org/bot783515666:AAFJv0pFMX5T9QNLum1f0wARdvHe-zQ0pbs/sendMessage'
            + '?chat_id=289778663'
            + '&text=' + response;
    Http.open("POST", url2);
    Http.send();

    document.getElementById("resp").innerHTML = "Услышал тебя"
}