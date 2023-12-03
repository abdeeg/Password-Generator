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

function getPasswordOptions() {
  
  if (document.getElementById("include1").checked) {
  var includeLower = lowerCasedCharacters;
}
if (document.getElementById("include2").checked) {
  var includeUpper = upperCasedCharacters;
}
if (document.getElementById("include3").checked) {
  var includeNumeric = numericCharacters;
}
if (document.getElementById("include4").checked) {
  var includeSpecial = specialCharacters;
}
} 

console.log(getPasswordOptions());


// Below I've created a function that adds my arrays into 'newArray'.
// I've then used.join to add my own separator which is black because I was having issues with my password generation being full of commas.
// My new array now being a string, it runs a for loop and selects random elements from my new array up to 40 characters. 

function generatePassword() {
  var selectedLower = getPasswordOptions.includeLower;
  var selectedUpper = getPasswordOptions.includeUpper;
  var selectedNumeric = getPasswordOptions.includeNumeric;
  var selectedSpecial = getPasswordOptions.includeSpecial;
  var pass = '';
  var newArray = [];
  if (selectedLower) {
    newArray = newArray.concat(lowerCasedCharacters)
  }
  if (selectedUpper) {
    newArray = newArray.concat(upperCasedCharacters)
  }
  if (selectedNumeric) {
    newArray = newArray.concat(numericCharacters)
  }
  if (selectedSpecial) {
    newArray = newArray.concat(specialCharacters)
  };
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