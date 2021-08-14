let clock = () => {
    let date = new Date();
    let hour = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let period = "AM";
    if (hour == 0) {
      hour = 12;
    } else if (hour >= 12) {
      hour = hour - 12;
      period = "PM";
    }
    hour = hour < 10 ? "0" + hour : hour;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;
  
    let time = `${hour}:${mins}:${secs}:${period}`;
    document.getElementById("clock").innerText = time;
    setTimeout(clock, 1000);
  };
  
  clock();
  