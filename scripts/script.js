import * as moment from "moment";

window.onload = function() {
    var typed = new Typed(".firstText", {
        strings: [
            "Welcome to my personal portfolio 🚀",
            "Feel free to look around",
            "Keep in touch 😀",
        ],
        typeSpeed: 50,
        backSpeed: 75,
        fadeOut: true,
        loop: true,
    });

    var typed = new Typed(".endingText", {
        strings: [
            "Thanks for paying a visit!",
            "Come back anytime!",
            "Have a nice day!",
        ],
        typeSpeed: 50,
        backSpeed: 75,
        fadeOut: true,
        loop: true,
    });
};

var zntJoinDate = moment([2021, 9, 2]); // date got into ZNT
var b2beJoinDate = moment([2020, 2, 1]); // date got into ZNT
var b2beLeaveDate = moment([2020, 7, 1]); // date got into ZNT
var currentTime = moment(); // get current datetime

var zntDifference = currentTime.diff(zntJoinDate, "months") + 1; // znt working duration
var b2beDifference = b2beLeaveDate.diff(b2beJoinDate, "months") + 1; // B2Be working duration

document.getElementById("zntDuration").innerHTML +=
    " (" + zntDifference + " Months" + ")";
document.getElementById("b2beDuration").innerHTML +=
    " (" + b2beDifference + " Months" + ")";