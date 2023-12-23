// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

/* The function below sets the minimum and maximum characters for the password generator (nothing below 7 and no more than 50) */
function generate(){
  var passwordLength = parseFloat(document.getElementById('txtPasswordLength').value);
  
  var password="";
if(!isNaN(passwordLength))
  { 
      if(passwordLength < 7 || passwordLength > 50)
      {
          document.getElementById("error").style.display = "block";
          document.getElementById('txtPassword').value = "";
      } else {
          document.getElementById("error").style.display = "none";
          password = getPassword(passwordLength);
          document.getElementById('txtPassword').value = password;
      }
  }
}



function generatePassword() {
  var pass = '';
  var newArray = specialCharacters.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters);
  let str = newArray.join("")
  for (let i = 1; i <= 40; i++) {
      let char = Math.floor(Math.random()
          * str.length + 1);
      pass += str.charAt(char)
  }

  return pass;
}

console.log(generatePassword());

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);