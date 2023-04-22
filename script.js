// Assignment Code
var generateBtn = document.querySelector("#generate");

function getRandomNumber(min, max) {
  var randomNumber = Math.random()
  var randomNumberUpToMax = randomNumber * max
  var randomNumberInRange = min + randomNumberUpToMax;

  return Math.floor(randomNumberInRange);
}
function getRandomValueFromArray(array) {
  var randomArrayPosition = getRandomNumber(0, array.length);
  return array[randomArrayPosition];
}
//Password Arrays needed to generate a random password. 
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numericCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "=", "?", "/"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Generate the user password with a prompt
//1. Ask the user how many characters.

//2. Ask the user if they would like a special characters.
//3.Ask if the users wants to include uppercase letters.
//4.Ask the user if they want a lowercase letters.
//5. Ask the user if they would like to include numbers
//6. Generate the password with the number characters and the types of characters selected by the user.
function generatePassword() {
  console.log("Hi! You clicked the button.");
  //I created a user prompts for the password length and the amount of password characters.
  var passwordLength = prompt("How many characters would you like your password to contain?");
  passwordLength = Number(passwordLength)
  console.log(passwordLength);
  //These are the conditions needed to determine if the code will run. 
  //The alerts are included so the user knows to insert correct input.
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 - 128");
    generatePassword()
  }
  else if (isNaN(passwordLength)) {
    alert("Please enter a valid number between 8 - 128 characters.")
    generatePassword()
  }
  var password = ""
  //This allows access to the array.
  var options=[]
  //Confirm to verify all the characters they will like in their password. 
  var letUpperCaseLetters = confirm("Would you like an upper case letter?");
  if (letUpperCaseLetters) {
    options=options.concat(upperCaseLetters)
  }
  var letLowerCaseLetters = confirm("Would you like a lower case letter?");
  if (letLowerCaseLetters) {
    options=options.concat(lowerCaseLetters)
  }
  var letSpecialCharacters = confirm("Would you like a special character?");
  if (letSpecialCharacters) {
    options=options.concat(specialCharacters)
  }
  var letNumericCharacters = confirm("Would you like a numeric character?");
  if (letNumericCharacters) {
    options=options.concat(numericCharacters)
  }
  //Included for loop so the password length is included with all the characters and should run as many times as needed. 
for (let i= 0; i < passwordLength; i++) {
  password += getRandomValueFromArray(options)
  
}

  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);











