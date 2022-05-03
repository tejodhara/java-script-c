function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
    //  let hoverMinutes = hh + ":" + mm + ":" + ss + " " + session;
     let houerMinutes = hh + ":" + mm;
     let second =  " \t" + ss ;
     let sec= session;
     
    document.getElementById("hourmin").innerText = houerMinutes; 
    // let t = setTimeout(function(){ currentTime() }, 1000);
    document.getElementById("seconds").innerText = second; 
    let s = setTimeout(function(){ currentTime() }, 1000);
    document.getElementById("sec").innerText = sec; 

  }
  currentTime();