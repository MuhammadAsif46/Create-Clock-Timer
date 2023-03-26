var hours =  document.getElementById("hour");
var minutes =  document.getElementById("minute");
var seconds =  document.getElementById("seconds");
var amPm = document.getElementById("am-pm");

setInterval(function(){
    var date = new Date()
    var currentHour = date.getHours();
})

if (currentHour > 11) {
    amPm.innerText = "pm"
}if (currentHour > 12) {
    currentHour -= 12
}
hour.innerText = date.getHour();
minutes.innerText = date.getMinutes();
seconds.innerText = date.getSeconds();
amPm.innerText = "am";
