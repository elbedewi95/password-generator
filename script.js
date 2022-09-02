// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var submitBtn;
var passLength;
var isUpper;
var isLower;
var isNumeric;
var isChar;
var password="";
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lower=[];
for (let index = 0; index < upper.length; index++) {
  lower.push(upper[index].toLowerCase());
}
var specialChar = ['~','`','!', '@','#','$','%','^','&','*','(',')','_','-','+','=','{','[','}',']','|','\\',':',';','"','<',',','>','.','?','/'];
var numeric = ["1","2","3","4","5","6","7","8","9"];
var array= [];
var empty=[];

// Write password to the #password input
function writePassword() {
 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  passwordText.textContent = password;
  
}


//generates password based on criteria
function generatePassword(){
  if(isUpper){
    array.push(upper);
  }
  if(isLower){
    array.push(lower);
  }
  if(isNumeric){
    array.push(numeric);
  }
  if(isChar){
    array.push(specialChar);
  }
  if(!isUpper && !isLower && !isNumeric && !isChar){
    alert("You need to chose at least one option");
  }
  console.log(array.length);
for (let index = 0; index < passLength; index++) {
  var randomArray = array[Math.floor(Math.random()*array.length)];
  var randomCharacter = randomArray[Math.floor(Math.random()*randomArray.length)];
  password = password+randomCharacter;
}
writePassword();
password="";

while(array.length > 0) {
  array.pop();
}

console.log(array);
return;
}


//retrieves password criteria as inputed by user
function getData(){
  passLength = parseInt(document.querySelector("#pass-length").value);
  console.log(passLength);
  isUpper= document.querySelector("#uppercase").checked;
  console.log(isUpper);
  isLower=  document.querySelector("#lowercase").checked;
  console.log(isLower);
  isNumeric=  document.querySelector("#numeric").checked;
  console.log(isNumeric);
  isChar=  document.querySelector("#special").checked;
  console.log(isChar);
  generatePassword();
}

function getCriteria() {
  document.getElementById("criteria").style.visibility = "visible";
  submitBtn= document.querySelector("#submit");
  submitBtn.addEventListener("click",getData);
}

// Add event listener to generate button
generateBtn.addEventListener("click", getCriteria);





