function displaytime() {
      var date = new Date();
      var hrs = date.getHours();
      var min = date.getMinutes();
      var sec = date.getSeconds();
      var sessions = document.getElementById("session");
      var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      var day = dayNames[date.getDay()];
      var monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
      var month = monthNames[date.getMonth()];
      var date = date.getDate();


      if (hrs >= 12){
            sessions.innerHTML = "PM";
      }else{
            sessions.innerHTML = "AM";
      }

      if (hrs > 12){
            hrs = hrs - 12;
      }
      if (hrs < 10){
            hrs = "0" + hrs;
      }
      if (min < 10){
            min = "0" + min;
      }
      if (sec < 10){
            sec = "0" + sec;
      }

      document.getElementById("hour").innerHTML = hrs;
      document.getElementById("minutes").innerHTML = min;
      document.getElementById("seconds").innerHTML = sec;
      document.getElementById("day").innerHTML = day;
      document.getElementById("month").innerHTML = month;
      document.getElementById("date").innerHTML = date;
}
setInterval(displaytime,10);
