function ValidateEmail(inputText)
{

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
  // alert("correct email");
   const v =document.querySelector(".error-text-email").style.display;
   if(v === "block"){
   document.querySelector(".error-text-email").style.display = "none";
   }
   const k = document.querySelector(".error-img-email").style.display;
   if(k === "block"){
      document.querySelector(".error-img-email").style.display = "none";
   }



document.form1.Email.focus();
return true;
}
else
{
// alert("You have entered an invalid email address!");
// document.querySelector("small").style.visibility = "visible";
// document.querySelector("input").classList.add("red-border");

document.querySelector(".error-text-email").style.display = "block";
document.querySelector(".error-img-email").style.display = "block";
// document.querySelector(".emaill-input").style.borderColor = "hsl(0, 100%, 74%)";

 document.form1.Email.focus();
return false;
}
}




function isvalidfname(fname)
{
if(fname.value === "")
{


   document.querySelector(".error-text-fname").style.display = "block";
   document.querySelector(".error-img-fname").style.display = "block";
   // document.querySelector(".emaill-input").style.borderColor = "hsl(0, 100%, 74%)";




}
else
{


const v =document.querySelector(".error-text-fname").style.display;
if(v === "block"){
document.querySelector(".error-text-fname").style.display = "none";
}
const k = document.querySelector(".error-img-fname").style.display;
if(k === "block"){
   document.querySelector(".error-img-fname").style.display = "none";
}
}
}






function isvalidlname(lname)
{
if(lname.value === "")
{


   document.querySelector(".error-text-lname").style.display = "block";
   document.querySelector(".error-img-lname").style.display = "block";
   // document.querySelector(".emaill-input").style.borderColor = "hsl(0, 100%, 74%)";




}
else
{


const v =document.querySelector(".error-text-lname").style.display;
if(v === "block"){
document.querySelector(".error-text-lname").style.display = "none";
}
const k = document.querySelector(".error-img-lname").style.display;
if(k === "block"){
   document.querySelector(".error-img-lname").style.display = "none";
}
}
}








function isvalidpassword(password)
{
if(password.value === "")
{


   document.querySelector(".error-text-password").style.display = "block";
   document.querySelector(".error-img-password").style.display = "block";
   // document.querySelector(".emaill-input").style.borderColor = "hsl(0, 100%, 74%)";




}
else
{


const v =document.querySelector(".error-text-password").style.display;
if(v === "block"){
document.querySelector(".error-text-password").style.display = "none";
}
const k = document.querySelector(".error-img-password").style.display;
if(k === "block"){
   document.querySelector(".error-img-password").style.display = "none";
}
}
}
