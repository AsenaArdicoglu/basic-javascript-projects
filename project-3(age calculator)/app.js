// Variable for datapicker

var dataPicker = document.getElementById('dataPicker');
var choseDate = document.getElementById('choseDate');

// Variable for printing values

var ageYear = document.getElementById('ageYear');
var ageMonth = document.getElementById('ageMonth');
var ageDays = document.getElementById('ageDays');
var ageHour = document.getElementById('ageHours');
var ageSeconds = document.getElementById('ageSeconds');
var ageMilliSeconds = document.getElementById('ageMiliSeconds');

datePicker.addEventListener('change', function () {
    // alert(this.value); check it work
    var options = {year: 'numeric', month: 'long', day: 'numeric'};
    var selectedDate = new Date(this.value);
    var DOB = selectedDate.toLocaleDateString('en-US', options);

    //console.log("DOB IS: " + DOB); check it work

    choseDate.innerHTML = "DOB : " + " " + DOB;

    var milliSeconds_Btw_DOB = Date.parse(DOB);
    var milliSecond_Btw_Now = Date.now();

    var age_in_MilliSeconds = milliSecond_Btw_Now - milliSeconds_Btw_DOB;
    //console.log(age_in_MilliSeconds); check it work

    var miliSeconds = age_in_MilliSeconds;
    var second = 1000;
    var minute = second * 60;
    var hour = minute *60;
    var day = hour *24;
    var month = day *30;
    var year = day *365;

    // now start the calculation
    var years = Math.round(miliSeconds/year);
    var month = years * 12;
    var days = years * 365;
    var hours = Math.round(miliSeconds/hour);
    var seconds = Math.round(miliSeconds/second);

    //now it is time to print values in the boxes
     ageYear.innerHTML = years
     ageMonth.innerHTML = month
     ageDays.innerHTML = days
     ageHour.innerHTML = hour
     ageSeconds.innerHTML = second
     ageMiliSeconds.innerHTML = miliSeconds

     document.querySelector('.age-calc').classList.add('expand');
})
