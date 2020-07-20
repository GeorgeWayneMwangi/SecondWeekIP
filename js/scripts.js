var century, year, month, day, dayValue,gender;
var maleNames=["Kwasi","Kwadwo", "Kwabena" ,"Kwaku","Yaw","Kofi","Kwame"];
var femaleNames=["Akosua","Adwoa:","Abenaa","Akua","Yaa","Afua"];
var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var century= parseInt(document.getElementById("CenturyDigits"));
var year= parseInt(document.getElementById("YearDigits"));
var month= parseInt(document.getElementById("Month"));
var day = parseInt(document.getElementById("Day"));
var gender=document.getElementsByName("gender");
var getDayValue =function(century,year,month,day){
  return (Math.floor(((century/4)-2*century-1)+((5*year/4))+((26*(month+1)/10))+day)%7);
  if (getDayValue < 0) {
      getDayValue = getDayValue * -1;
    }
    else if (getDayValue > 0) {
      return getDayValue
    }

};
function getAkanName() {event.preventDefault();
if(document.getElementById("male").checked== true){
  document.getElementById("Results").innerHTML="You were born on "+dayNames[getDayValue(century,year,month,day)] + " and Your akan name is  " +maleNames[getDayValue(century,year,month,day)];
}
else if  (document.getElementById("female").checked== true) {
  document.getElementById("Results").innerHTML="You were born on "+dayNames[getDayValue(century,year,month,day)] + " and Your akan name is  " +femaleNames[getDayValue(century,year,month,day)];
}
}
