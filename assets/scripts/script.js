// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Arrays for the characters password to be used in the generator for the user
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V","W", "X", "Y", "Z" ];
var numericCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "=", "/", "?"];

//Arrays for the input value from the user
var userOptions = [];
var userPassword = [];

//Generate password inputs for the user
function generatePassword() {
userPassword = [];
var passwordLength = prompt("How many characters would you like your password to contain?");
  if (passwordLength === null) {
    generateBtn();
} 

  else if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please enter a valid number length between 8 and 128 characters.");
    generatePassword();
  }

  else {
    includeLowercase = confirm("Click OK to confirm including lower case characters.");
    includeUppercase = confirm("Click OK to confirm including upper case letters.");
    includeNumeric = confirm("Click OK to confirm including numeric characters.");
    includeSpecial = confirm("Click OK to confirm including special characters.");
  }
    
//With the user input determine which Arrays it applies too, connecting the string Arrays to userOptions
  if (includeLowercase === true) {
    userOptions =  userOptions.concat(lowerCaseLetters);
  }

  if (includeUppercase === true) {
    userOptions = userOptions.concat(upperCaseLetters);
  }

  if (includeNumeric === true) {
    userOptions = userOptions.concat(numericCharacters);
  }

  if (includeSpecial === true) {
    userOptions = userOptions.concat(specialCharacters);
  }

//Added if statement if any characters weren't selected, takes back to generatePassword()
  if (userOptions.length === 0) {
    alert("Please confirm at least one type of character to include in your password.");
    generatePassword();
  }

//Loop through the arrays to create a userPassword to match the passwordLength given by the user
  for (var i = 0; i < passwordLength; i++) {
    var userIndex = userOptions[Math.floor(Math.random() * userOptions.length)];
    userPassword.push(userIndex);
}

    var password = userPassword.join("") 
    return password;
}

