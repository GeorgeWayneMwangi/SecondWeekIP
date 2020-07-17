var gender=["male","female"];
var maleNames=["Kwasi:Sunday","Kwadwo:Monday", "Kwabena:Tuesday" ,"Kwaku:Wednesday","Yaw:Thursday","Friday:Kofi","Saturday:Kwame"];
var femaleNames=["Sunday:Akosua","Monday:Adwoa:","Tuesday:Abenaa","Wednesday:Akua","Thursday:Yaa","Friday:Afua"];
var century= document.getElementsById("CenturyDigits").value;
var year= document.getElementsById("YearDigits").value;
var month= document.getElementsById("Month").value;
var day =document.getElementsById("Day").value;
var d=function(century,year,month,day) {
return (((century/4)-2*century-1)+((5*year/4))+((26*(month+1)/10))+day)&7;
}function findGender() {
  var gender=document.getElementsByName("gender");
  if (gender=gender[0]){
    maleNames[d(century,year,month,day)]
  }
  else if (gender=gender[1]) {
    femaleNames[d(century,year,month,day)]
  }
  else {
    return false;
  }
}
