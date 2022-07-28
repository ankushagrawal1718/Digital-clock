console.log("hey! javascript is working");

function displayTime(){
    var dateTime = new Date();
    // console.log(dateTime);
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();

    var period = document.getElementById('period');
    if(hours<10){
        hours = "0" + hours;
    }
    if(minutes<10){
        minutes = "0" + minutes;
    }
    if(seconds<10){
        seconds = "0" + seconds;
    }

    if(hours>=12){
        period.innerHTML = 'PM';
        
    }else{
        period.innerHTML = 'AM';
    }

    if(hours>12){
        hours = hours-12;
    }


    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

}

setInterval(displayTime,10);