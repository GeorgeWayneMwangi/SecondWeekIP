var century, year, month, day, dayValue,gender;//Get input from user
var maleNames=["Kwasi:Sunday","Kwadwo:Monday", "Kwabena:Tuesday" ,"Kwaku:Wednesday","Yaw:Thursday","Friday:Kofi","Saturday:Kwame"];
var femaleNames=["Sunday:Akosua","Monday:Adwoa:","Tuesday:Abenaa","Wednesday:Akua","Thursday:Yaa","Friday:Afua"];
var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
function inputFromUser() {
century= parseInt(document.getElementById("CenturyDigits").value);
year= parseInt(document.getElementById("YearDigits").value);
month= parseInt(document.getElementById("Month").value);
day = parseInt(document.getElementById("Day").value);
}
function getDayValue (){
  inputFromUser();
  d=(((century/4)-2*century-1)+((5*year/4))+((26*(month+1)/10))+day)%7;
  console.log(d);
  return (Math.floor(d));
  if (d < 0) {
      d = d * -1;
    }
    else if (d > 0) {
      return d;
    }
}
function getGender(){
  var gender = document.getElementsByName("gender");
  if(gender[0].checked == true){
    var gender = "male";}
  else (gender[1].checked == true)
    var gender = "female";
  }
  switch(gender){
    case gender="male":
      switch(dayValue){
        case(1):
        document.getElementById("Results").innerHTML="You were born on " +dayNames[0] + " and Your akan name is " +maleNames[0];
        break;
        case(2):
        document.getElementById("Results").innerHTML="You were born on "+dayNames[1] + " and Your akan name is " +maleNames[1];
        break;
        case (3):
        document.getElementById("Results").innerHTML="You were born on " +dayNames[2]+ " and Your akan name is " +maleNames[2];
        break;
        case(4):
        document.getElementById("Results").innerHTML="You were born on "+dayNames[3] +  " and Your akan name is " +maleNames[3];
        break;
        case(5):
        document.getElementById("Results").innerHTML="You were born on "+dayNames[4] +  " and Your akan name is " +maleNames[4];
        break;
        case(6):
        document.getElementById("Results").innerHTML="You were born on "+dayNames[5] +  " and Your akan name is " +maleNames[5];
        break;
        case(0):
        document.getElementById("Results").innerHTML="You were born on "+dayNames[6] + " and Your akan name is " +maleNames[6];
        break;
      }
      break;
      case gender= "female":
      switch (dayValue ){
        case(1):
        document.getElementById("Results").innerHTML="You were born on "+dayNames[0] + " and Your akan name is  " +femaleNames[0];
        break;
        case( 2):
        document.getElementById("Results").innerHTML="You were born on " +dayNames[1] + " and Your akan name is " +femaleNames[1];
        break;
        case( 3):
        document.getElementById("Results").innerHTML="You were born on " +dayNames[2] + " and Your akan name is " +femaleNames[2];
        break;
        case(4):
        document.getElementById("Results").innerHTML="You were born on " +dayNames[3] + " and Your akan name is " +femaleNames[3];
        break;
        case(5):
        document.getElementById("Results").innerHTML="You were born on " +dayNames[4] + " and Your akan name is " +femaleNames[4];
        break;
        case(6):
        document.getElementById("Results").innerHTML="You were born on " +dayNames[5] + " and Your akan name is " + femaleNames[5];
        break;
        case(-0):
        document.getElementById("Results").innerHTMl="You were born on " +dayNames[6] + " and Your akan name is " +femaleNames[6];
        break;
      }
      break
      default:
  }
function findName(){
  dayValue= getDayValue();
  getGender();
}
