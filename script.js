// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var passwordLength = prompt(
    "select length of the password between 8 to 128",
    "8-128"
  );
  var isUppercase = confirm(
    "Do you want to include uppercase character in the password?"
  );
  var isLowercase = confirm(
    "Do you want to include lowercase character in the password?"
  );
  var isNumeric = confirm("Do you want to have numbers in the password?");
  var isSpecialchar = confirm(
    "Do you want special characters in the password?"
  );
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  var numbers = "0123456789".split("");
  var specialChar = "!#$%&’(),*+-./:;<=>?@[]^_`{|}~".split("");
  var selectedChars = "";

  // Adding the selected chars to the array

  if (isUppercase == true) {
    selectedChars = selectedChars.concat(upperCase);
  }
  if (isLowercase == true) {
    selectedChars = selectedChars.concat(lowerCase);
  }
  if (isNumeric == true) {
    selectedChars = selectedChars.concat(numbers);
  }
  if (isSpecialchar == true) {
    selectedChars = selectedChars.concat(specialChar);
  }

  //checks for password length and whether atleast one type of character is selected and call the function to generate password
  if (passwordLength != null && passwordLength >= 8 && passwordLength <= 128) {
    if (
      isUppercase == true ||
      isLowercase == true ||
      isNumeric == true ||
      isSpecialchar == true
    ) {
      generatePassword();
    } else {
      alert("atleast one character should be selected");
      return;
    }
  } else {
    alert("invalid password length");
    return;
  }
  // Gnerate the password for the selected criteria
  function generatePassword() {
    var result = "";
    if (isUppercase && passwordLength > result.length) {
      result += upperCase[Math.floor(Math.random() * upperCase.length)];
    }
    if (isLowercase && passwordLength > result.length) {
      result += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    }
    if (isNumeric && passwordLength > result.length) {
      result += numbers[Math.floor(Math.random() * numbers.length)];
    }
    if (isSpecialchar && passwordLength > result.length) {
      result += specialChar[Math.floor(Math.random() * specialChar.length)];
    }
    if (passwordLength > result.length) {
      for (i = result.length; i < passwordLength; i++) {
        result +=
          selectedChars[Math.floor(Math.random() * selectedChars.length)];
      }
    }
    return result;
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
