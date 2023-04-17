// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for password to be used in the generator for the user
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V","W", "X", "Y", "Z" ];
var numericCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "=", "/", "?"];

var userOptions = [];
var userPassword = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
} 
// Generate password inputs for the user
function generatePassword() {
var passwordLength = prompt("How many characters would you like your password to contain?");
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please enter a valid number length between 8 and 128 characters.");
    generatePassword();
  }

  else{
    lowerCase = confirm("Click OK to confirm including lower case characters.");
    upperCase= confirm("Click OK to confirm including upper case letters.");
    numberCharacters = confirm("Click OK to confirm including numeric characters.");
    symbolCharacters = confirm("Click OK to confirm including special characters.");
  }

  //With the user input determine which Arrays it applies too
  if (lowercase === true) {
    userOptions =  userOptions.concat(lowerCaseLetters);
  }

  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
