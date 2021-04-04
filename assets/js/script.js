// Assignment code here

// assign variables
var confirmLength;
var confirmLowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var confirmUpperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var confirmNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var confirmSpecialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "~",
  "`",
  "|",
  "}",
  "{",
  "[",
  "]",
];

// generate password function
var generatePassword = function () {
  confirmLength = parseInt(
    prompt("How many characters would you like your password to be?")
  );
  // conditional statements for each variable
  if (confirmLength <= 7 || confirmLength >= 128) {
    alert("Password must be between 8-128 characters!");
    confirmLength = parseInt(
      prompt("How many characters would you like your password to be?")
    );
  }
  var includeLowerCase = window.confirm(
    "Please click OK to confirm use of lower case characters"
  );
  var includeUpperCase = window.confirm(
    "Pleaes click OK to confirm use of upper case characters"
  );
  var includeNumeric = window.confirm(
    "Please click OK to confirm use of numbers"
  );
  var includeSpecialCharacters = window.confirm(
    "Please click OK to confirm use of special characters"
  );

  console.log(
    "Lower Case",
    includeLowerCase,
    "includeUpperCase",
    includeUpperCase,
    "includeNumeric",
    includeNumeric,
    "includeSpecialCharacters",
    includeSpecialCharacters
  );

  // loop and alert when user failed to choose an option
  while (
    includeLowerCase === false &&
    includeUpperCase === false &&
    includeNumeric === false &&
    includeSpecialCharacters === false
  ) {
    alert("Please choose one of the following options to create a password!");
    var includeLowerCase = window.confirm(
      "Please click OK to confirm use of lower case characters"
    );
    var includeUpperCase = window.confirm(
      "Please click OK to confirm use of upper case characters"
    );
    var includeNumeric = window.confirm(
      "Please click OK to confirm use of numbers"
    );
    var includeSpecialCharacters = window.confirm(
      "Please click OK to confirm use of special characters"
    );
  }
  console.log(
    "Lower Case",
    includeLowerCase,
    "includeUpperCase",
    includeUpperCase,
    "includeNumeric",
    includeNumeric,
    "includeSpecialCharacters",
    includeSpecialCharacters
  );
  var randomPassword = [];
  // for loop to create random characters for each variable
  for (var i = 0; i < confirmLength; i++) {
    if (includeLowerCase) {
      var index = Math.floor(Math.random() * confirmLowerCase.length);
      console.log(index);
      var randomElement = confirmLowerCase[index];
      console.log(randomElement);
      randomPassword.push(randomElement);
    }

    if (includeUpperCase) {
      var index = Math.floor(Math.random() * confirmUpperCase.length);
      console.log(index);
      var randomElement = confirmUpperCase[index];
      console.log(randomElement);
      randomPassword.push(randomElement);
    }

    if (includeNumeric) {
      var index = Math.floor(Math.random() * confirmNumeric.length);
      console.log(index);
      var randomElement = confirmNumeric[index];
      console.log(randomElement);
      randomPassword.push(randomElement);
    }

    if (includeSpecialCharacters) {
      var index = Math.floor(Math.random() * confirmSpecialCharacters.length);
      console.log(index);
      var randomElement = confirmSpecialCharacters[index];
      console.log(randomElement);
      randomPassword.push(randomElement);
    }
  }
  console.log(randomPassword);

  var newPassword = ""; 
  newPassword = randomPassword.join("").substr(0, confirmLength); 
  // console.log(newPassword); 
  return newPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
