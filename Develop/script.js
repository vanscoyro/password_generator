// Assignment Code
var generateBtn = document.querySelector("#generate");


//generate password function that takes user input and creates a password
function generatePassword(){

  //declare length variable that will accecpt user input
  var length = prompt("Please enter a number between 8 and 128")

  //set condition for function to run within certain numbers (8 and 128)
  if(length >=8 && length <= 128){

    //prompt user for what they want in their password
    //lower case, upper case, numbers, or special characters
    var lowerCase = confirm("Do you want lowercase letters?")
    var upperCase = confirm("Do you want uppercase letters?")
    var numericValue = confirm("Do you want numbers in your password?")
    var specialCharacter = confirm("Do you want special characters in your password?")

  //lower case choice variations 

    //only lower case characters true condition
    if(lowerCase == true && (upperCase == false) && (numericValue==false) && (specialCharacter==false)){
      charset = "abcdefghijklmnopqrstuvwxyz",
      pwd = "";
      for (var i = 0, n = charset.length; i < length; i++) {
          pwd += charset.charAt(Math.floor(Math.random() * n));
        }
      return pwd;
      }

    //lower case and upper case true condition, numeric and special false condition
    if(lowerCase == true && (upperCase == true) && (numericValue == false) && (specialCharacter == false)){
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
      pwd = "";
      for (var i = 0, n = charset.length; i < length; i++) {
          pwd += charset.charAt(Math.floor(Math.random() * n));
        }
      return pwd;
      }

    //lower case, upper case, and numeric true ; special false condition
    if(lowerCase == true && (upperCase == true) && (numericValue == true) && (specialCharacter == false)){
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      pwd = "";
      for (var i = 0, n = charset.length; i < length; i++) {
          pwd += charset.charAt(Math.floor(Math.random() * n));
        }
      return pwd;
      }

    //lower case, special, and numeric true ; upper case false condition
    if(lowerCase == true && (upperCase == false) && (numericValue == true) && (specialCharacter == true)){
      charset = "abcdefghijklmnopqrstuvwxyz0123456789 !#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
      pwd = "";
      for (var i = 0, n = charset.length; i < length; i++) {
          pwd += charset.charAt(Math.floor(Math.random() * n));
        }
      return pwd;
      }

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
