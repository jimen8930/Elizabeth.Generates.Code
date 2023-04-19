// Assignment Code
var generateBtn = document.querySelector("#generate");

//Password Arrays
var upperCaseLetters =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCaseLetters =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numericCharacters =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialCharacters =["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "=", "?", "/"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Generate the user password with a prompt
//1. Ask the user how many characters

//2. Ask the user if they would like a special characters
//Ask if the users wants to include uppercase letters
//Ask the user if they want a lowercase letters
//5. Ask the user if they would like to include numbers
//6. Generate the password with the number characters and the types of characters selected by the user
function generatePassword() {
 console.log("Hi! You clicked the button.");
 //Created a user prompts for the password length and password characters.
  var passwordLength = prompt("How many characters would you like your password to contain?");
  passwordLength = Number(passwordLength)
  console.log(passwordLength);
    if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 - 128");
    generatePassword()
    }
    else if (isNaN(passwordLength)) {
      alert("Please enter a valid number between 8 and 128 characters.")
      generatePassword()
    } 
    var upperCaseLetters = prompt("Would you like an upper case letter?");
    var upperCaseLetters=confirm("Yay! Sprinkling some upper case letters.");
      if (upperCaseLetters !== upperCaseLetters) {
        alert("Please enter a valid upper case letter.");
      }
    var lowerCaseLetters = prompt("Would you like a lower case letter?");
    var lowerCaseLetters=confirm("Yay! Sprinkling some lower case letters.");
      if (lowerCaseLetters !== lowerCaseLetters) {
        alert("Please enter a valid lower case letter?")
      }
    var specialCharacters = prompt("Would you like a special character?");
    var specialCharacters=confirm("Yay! Sprinkling some special characters.");
      if(specialCharacters !== specialCharacters) {
        alert("Please enter a valid special character?");
      } 
    var numericCharacters = prompt("Would you like a numeric character?");
    var numericCharacters=confirm("Yay! Sprinkling some numeric characters.");
      if(numericCharacters !== numericCharacters) {
        alert("Please enter a valid numeric character?");
      }

    //return "Generated password will go here!";
}//Make to confirm each 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





var password=[upperCaseLetters, lowerCaseLetters, specialCharacters, numericCharacters];
console.log(password);
function getRandomNumber(min, max) {
  var randomNumber=Math.floor(Math.random()) 
  console.log(randomNumber);
  var randomNumberUpToMax=randomNumber * max // Random number between 0 and max -0.1
  console.log(randomNumberUpToMax)
  var randomNumberInRange= min + randomNumberUpToMax;
  console.log(randomNumberInRange);
  return Math.floor(randomNumberInRange); // Remove the decimal places
}
function getRandomValueFromArray(array) {
  var randomArrayPosition=getRandomNumber(0,array.length);
  return array[randomArrayPosition];
}


function random() {
  var randomNumber=Math.floor(Math.random()*password.length) 
  console.log(randomNumber);

}

random()


getRandomValueFromArray(password)