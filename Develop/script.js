// Assignment Code
var generateBtn = document.querySelector("#generate"); 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 
  
  passwordText.value = password;
  
};


function generatePassword() {
  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  var lower = lowercaseChar.split("");
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var upper = uppercaseChar.split("");
  var numericChar = "0123456789";
  var num = numericChar.split("");
  var symbolicChar = "!@#$%^&*()";
  var sym = symbolicChar.split("");
  var otherChar = [];

  var passwordLength = prompt("Enter length of password: 8-128 characters"); 
  var option1 = confirm("Include lowercase?");
  var option2 = confirm("Include uppercase?");
  var option3 = confirm("Include numbers?");
  var option4 = confirm("Include symbols?");
  
  if(passwordLength <8 || passwordLength > 128) {
    alert("Must be 8-128 characters long");
    generatePassword();
  }
     
 if(option1) {
       otherChar.concat(lower);
  } else if(option1 && option2) {
       otherChar.concat(lower, upper);
  } else if(option1 && option2 && option3) {
       otherChar.concat(lower, upper, num);
  } else if(option1 && option2 && option3 && option4) {
       otherChar.concat(lower, upper, num, sym);
  } else if(option2 && option3 && option4) {
     otherChar.concat(upper, num, sym);
  } else if(option1 && option2 && option4) {
     otherChar.concat(lower, upper, sym);
  } else if(option1 && option3 && option4) {
     otherChar.concat(lower, num, sym);  
  } else if(option1 && option3) {
     otherChar.concat(lower, num);
  } else if(option1 && option4) {
     otherChar.concat(lower, sym);
  } else if(option2 && option3) {
     otherChar.concat(upper, num);
  } else if(option2 && option4) {
     otherChar.concat(upper, sym);
  } else if(option3 && option4) {
     otherChar.concat(num, sym);
  };

  for(var i = 0; i < otherChar.length; i++) {
    var random = (Math.floor(Math.random() * otherChar.length));
    otherChar.textContent = otherChar[i];
 }; 
 
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);