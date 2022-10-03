// Assignment Code
var generateBtn = document.querySelector("#generate"); 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 
  
  passwordText.value = password;
  
};


function generatePassword() {
  var passwordLength = prompt("Enter length of password: 8-128 characters"); 
  var option1 = confirm("Include lowercase?");
  var option2 = confirm("Include uppercase?");
  var option3 = confirm("Include numbers?");
  var option4 = confirm("Include symbols?");
  var lowercaseChar = ["abcdefghijklmnopqrstuvwxyz"];
  var uppercaseChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var numericChar = ["0123456789"];
  var symbolicChar = ["!@#$%^&*()"];
  var otherChar = [];
  var message = "";
  
  if(passwordLength <8 || passwordLength > 128) {
    alert("Must be 8-128 characters long");
    generatePassword();
  }
  
 if(option1) {
  otherChar = otherChar.concat(lowercaseChar);
  } else if(option1 && option2) {
     otherChar = otherChar.concat(lowercaseChar, uppercaseChar);
  } else if(option1 && option2 && option3) {
    otherChar = otherChar.concat(lowercaseChar, uppercaseChar, numericChar);
  } else if(option1 && option2 && option3 && option4) {
    otherChar = otherChar.concat(lowercaseChar, uppercaseChar, numericChar, symbolicChar);
  } else if(option2 && option3 && option4) {
    otherChar = otherChar.concat(uppercaseChar, numericChar, symbolicChar);
  } else if(option1 && option2 && option4) {
    otherChar = otherChar.concat(lowercaseChar, uppercaseChar, symbolicChar);
  } else if(option1 && option3 && option4) {
    otherChar = otherChar.concat(lowercaseChar, numericChar, symbolicChar);  
  } else if(option1 && option3) {
    otherChar = otherChar.concat(lowercaseChar, numericChar);
  } else if(option1 && option4) {
    otherChar = otherChar.concat(lowercaseChar, symbolicChar);
  } else if(option2 && option3) {
    otherChar = otherChar.concat(uppercaseChar, numericChar);
  } else if(option2 && option4) {
    otherChar = otherChar.concat(uppercaseChar, symbolicChar);
  } else if(option3 && option4) {
    otherChar = otherChar.concat(numericChar, symbolicChar);
  };

  for(var i = 0; i < otherChar.length; i++) {
    var random = Math.floor(Math.random() * otherChar.length);
    message += otherChar[random];

 };
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);