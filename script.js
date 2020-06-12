// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
  var lettersLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var lettersUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var specialChar = ["`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "[", "{", "]", "}", ";", ":", "'", "/", "?", ".", ">", ",", "<"];
  
  var pWordChar = []

  var length = prompt("Number of Characters? Between 8 and 128 characters.");
    while (length<=8 || length>=128) {
      length = prompt("Number of Characters? Between 8 and 128 characters.")
    }
    

    var lowerCase = confirm("Lower Case Letters?")
  if (lowerCase){
    pWordChar = pWordChar.concat(lettersLowerCase)
  }



    var UpperCase = confirm("Upper Case Letters?")
  if (UpperCase) {
    pWordChar = pWordChar.concat(lettersUpperCase)
  }


    var numChar = confirm("Numbers?")
  if (numChar) {
    pWordChar = pWordChar.concat(num)
  }


      var spChar = confirm("Special Characters?")
  if (spChar) {
      pWordChar = pWordChar.concat(specialChar)
  }


    var testPWORD = "" 
  for (i=0; i<length; i++) {
    char= pWordChar[Math.floor(Math.random()*pWordChar.length)]
    testPWORD += char
  }


  return testPWORD
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

generateBtn.addEventListener("click", writePassword);