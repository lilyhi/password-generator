// Assignment code here
var confirmLength = "";
var confirmLowerCase = "abcdefghijklmnopqrstuvwxyz";
var confirmUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var confirmNumeric = "0123456789";
var confirmSpecialCharacters = " !@#$%^&*()_+~`|}{[]\:;?><,./-=";


// generate password function 
var generatePassword = function() {
  var confirmLength = prompt("How many characters would you like your password to be?");
  
  while (confirmLength <= 7 || confirmLength >= 128) {
    window.alert("Password must be between 8-128 characters!");
    var confirmLength = prompt("How many characters would you like your password to be?");


    var confirmLowerCase = window.confirm("Please click Ok to confirm use of lower case characters");
    var confirmUpperCase = window.confirm("Pleaes click Ok to confirm use of upper case characters");
    var confirmNumeric = window.confirm("Please click Ok to confirm use of numbers");
    var confirmSpecialCharacters = window.confirm("Please click Ok to confirm use of special characters");

    // denied all confirms 
    while (confirmLowerCase === false && confirmUpperCase === false && confirmNumeric === false && confirmSpecialCharacters === false);
      window.alert("Please choose one of the following options to create password!");
      var confirmLowerCase = window.confirm("Please click Ok to confirm use of lower case characters");
      var confirmUpperCase = window.confirm("Pleaes click Ok to confirm use of upper case characters");
      var confirmNumeric = window.confirm("Please click Ok to confirm use of numbers");
      var confirmSpecialCharacters = window.confirm("Please click Ok to confirm use of special characters");

  }
}





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
