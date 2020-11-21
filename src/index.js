// Logic for the HTML page displayed by Chromium
function getTimeNow() {
    var t = new Date();
    s = t.getSeconds();
    m = t.getMinutes();
    h = t.getHours();
    var checkNum = (num) => {if (num < 10){num = "0" + num} return num;};
    document.getElementById("display").innerHTML = 
    `${checkNum(h)} : ${checkNum(m)} : ${checkNum(s)}`;
    var cont = setInterval(getTimeNow, 500);
};
function getDay() {
    var d = new Date();
    day = d.getDay();
    console.log(day);
    switch (day) {
        case 1:
            document.getElementById('01').innerHTML = "<span>Mon</span>";
            break;
        case 2:
            document.getElementById('02').innerHTML = "<span>Tue</span>";
            break;
        case 3:
            document.getElementById('03').innerHTML = "<span>Wed</span>";
            break;
        case 4:
            document.getElementById('04').innerHTML = "<span>Thu</span>";
            break;
        case 5:
            document.getElementById('05').innerHTML = "<span>Fri</span>";
            break;
        case 6:
            document.getElementById('06').innerHTML = "<span>Sat</span>";
            break;
        case 7:
            document.getElementById('06').innerHTML = "<span>Sat</span>";
            break;
    }
};
