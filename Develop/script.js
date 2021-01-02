// Assignment Code
var generateBtn = document.querySelector("#generate");


//generate password function that takes user input and creates a password
function generatePassword(){

  //declare length variable that will accecpt user input
  var length = prompt("Please enter a number between 8 and 128")

  //set condition for function to run within certain numbers
  if(length >=8 && length <= 128){

    //TODO: code password generation code

  }else(alert("please enter a valid numeric value between 8 and 128"))

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
