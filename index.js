// Logic for the HTML page displayed by Chromium
function getTimeNow() {
    var t = new Date();
    s = t.getSeconds();
    m = t.getMinutes();
    h = t.getHours();
    var checkNum = (num) => {if (num < 10){num = "0" + num} return num;};
    document.getElementById("display").innerHTML = 
    `${h} : ${checkNum(m)} : ${checkNum(s)}`;
    var cont = setInterval(getTimeNow, 500);
}

