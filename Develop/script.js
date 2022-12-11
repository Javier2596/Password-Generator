// Assignment Code
var generateBtn = document.querySelector("#generate");  
var charLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var charUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var charNum = ["0","1","2","3","4","5","6","7","8","9"];
var charSym = ["!","@","#","$","%","^","&","*","(",")","[","]","{","}"];
var otherChar = [];



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 
  
  passwordText.value = password;

  function generatePassword() {
    
    var passwordLength = window.prompt("Enter length of password: 8-15 characters");
    var lengthPW = 8 <= passwordLength && passwordLength <= 15;
    var option1 = window.confirm("Include lowercase?");
    var option2 = window.confirm("Include uppercase?");
    var option3 = window.confirm("Include numbers?");
    var option4 = window.confirm("Include symbols?");
    
    if (!lengthPW) {
      alert("Must be 8-15 characters long");
      return;
    } 

    if(option1 && option2 && option3 && option4) {
     otherChar = otherChar.concat(charLower, charUpper, charNum, charSym);
     } else if(option1 && option2 && option3) {
       otherChar = otherChar.concat(charLower, charUpper, charNum);
     } else if(option1 && option2 && option4) {
       otherChar = otherChar.concat(charLower, charUpper, charSym);
     } else if(option1 && option3 && option4) {
       otherChar = otherChar.concat(charLower, charNum, charSym);
     } else if(option1 && option2) {
       otherChar = otherChar.concat(charLower, charUpper)
     } else if(option1 && option3) {
       otherChar = otherChar.concat(charLower, charNum);
     } else if(option1 && option4) {
       otherChar = otherChar.concat(charLower, charSym);
     } else if(option2 && option3 && option4) {
       otherChar = otherChar.concat(charUpper, charNum, charSym);
     } else if(option2 && option3) {
       otherChar = otherChar.concat(charUpper, charNum);
     } else if(option2 && option4) {
      otherChar = otherChar.concat(charUpper, charSym);
    } else if(option3 && option4) {
      otherChar = otherChar.concat(charNum, charSym);
    } else {
      return;
    };

    for (var i = 0; i < otherChar.length; i ++) {
    var index = Math.floor(Math.random() * otherChar.length);
    var choicePW = otherChar[index];  
    password += choicePW;
    }
    return password;
    };
    
   };

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
