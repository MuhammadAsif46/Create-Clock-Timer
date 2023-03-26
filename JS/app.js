var hour =  document.getElementById("hour");
var minutes =  document.getElementById("minute");
var seconds =  document.getElementById("seconds");
var amPm = document.getElementById("am-pm");


hour.innerText = date.getHour();
minutes.innerText = date.getMinutes();
seconds.innerText = date.getSeconds();
amPm.innerText = "am";
