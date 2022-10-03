// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordOptions = {
  option1: "Include lowercase?",
  option2: "Incude uppercase?",
  option3: "Include numeric characters?",
  option4: "Include symbolic characters?",
};



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 
  
  passwordText.value = password;
  
};


function generatePassword() {
  var passwordLength = prompt("Enter the number of characters you want in your password. Must greater than 8 but no more than 128."); 
  var passwordChars = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()".split('');

  confirm(passwordOptions.option1);
  confirm(passwordOptions.option2);
  confirm(passwordOptions.option3);
  confirm(passwordOptions.option4);

  for(var i = 0; i <= passwordLength; i++) {
    var index = Math.floor(Math.random() * passwordChars.length);
    word += passwordChars.substring(index, index +1);

  };
  return;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


