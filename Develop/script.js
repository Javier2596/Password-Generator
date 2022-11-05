// Assignment Code
var generateBtn = document.querySelector("#generate");  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 
  
  passwordText.value = password;


  function generatePassword() {
    var charLower = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
    var charUpper = ["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"];
    var charNum = ["0,1,2,3,4,5,6,7,8,9"];
    var charSym = ["!,@,#,$,%,^,&,*,(,),[,],{,}"];
    var otherChar = [];
    var passwordLength = prompt("Enter length of password: 8-128 characters");
    var lengthPW = 8 < passwordLength && passwordLength < 128;
    var option1 = confirm("Include lowercase?");
    var option2 = confirm("Include uppercase?");
    var option3 = confirm("Include numbers?");
    var option4 = confirm("Include symbols?");
    
console.log(lengthPW);

    if (!lengthPW) {
      alert("Must be 8-128 characters long");
      generatePassword();
    } 

    if(option1 && option2 && option3 && option4) {
      otherChar.concat(charLower, charUpper, charNum, charSym);
    } else if(option1 && option2 && option3) {
      otherChar.concat(charLower, charUpper, charNum);
    } else if(option1 && option2 && option4) {
      otherChar.concat(charLower, charUpper, charSym);
    } else if(option1 && option3 && option4) {
      otherChar.concat(charLower, charNum, charSym);
    } else if(option1 && option2) {
      otherChar.concat(charLower, charUpper)
    } else if(option1 && option3) {
      otherChar.concat(charLower, charNum);
    } else if(option1 && option4) {
      otherChar.concat(charLower, charSym);
    } else if(option2 && option3 && option4) {
      otherChar.concat(charUpper, charNum, charSym);
    } else if(option2 && option3) {
      otherChar.concat(charUpper, charNum);
    } else if(option2 && option4) {
      otherChar.concat(charUpper, charSym);
    } else if(option3 && option4) {
      otherChar.concat(charNum, charSym);
    } 
//     for(var i = 0; i < otherChar.concat().length; i++) { 
//      var random = (Math.floor(Math.random() * otherChar.length));
//       otherChar.textContent = otherChar[i];
//    }; 
//     return random;
//   };
//   };

 };
}; 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);