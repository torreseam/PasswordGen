//Character Array
var symbolsArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "`", "~", "{", "[", "]", "}"];
var numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercaseArr = ["a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
var uppercaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var passwordOptions = {
  length: length,
  hasSpecialCharacters: specialcharacters,
  hasNumericCharacters: numbers,
  hasLowerCasedCharacters: lowercase,
  hasUpperCasedCharacters: uppercase
};

//Generate Password Function
function generatePassword() {
  var passwordLenght = Number(prompt("How many characters would you like in your passowrd (Choose between 8 to 128)"));
  console.log(passwordLenght);

  if (isNaN(passwordLenght) || passwordLenght < 8 || passwordLenght > 128)
    passwordLenght = Number(prompt("Invalid Request, try again!"));
  var lowercase = confirm("Do you want all LowerCase?");
  var uppercase = confirm("Do you want all UpperCase?");
  var numbers = confirm("Do you want numbers?");
  var symbols = confirm("Do you want symbols?");

  if (!(lowercase && uppercase && numbers && symbols)) {
    alert("Pick one type");
    lowercase = confirm("Do you want all LowerCase?");
    uppercase = confirm("Do you want all UpperCase?");
    numbers = confirm("Do you want numbers?");
    symbols = confirm("Do you want symbols?");
    console.log(lowercase, uppercase, numbers, symbols)
  }
  var passwordOptions = {
    lenght: passwordLenght,
    hasSpecialCharacters: symbols,
    hasNumericCharacters: numbers,
    hasLowerCasedCharacters: lowercase,
    hasUpperCasedCharacters: uppercase,
  };
  return passwordOptions
};
function generate() {
  var passwordOptions = generatePassword();
  var passwordChar = [];
  var lowercaseChar = [];
  if (passwordOptions.hasLowerCasedCharacters) {
    for (var i = 0; i < passwordOptions.lenght; i++) {
      var lowercaseChar = lowercaseArr[Math.floor(Math.random() * passwordOptions.lenght)];
      passwordChar.push(lowercaseChar[i]);
      console.log(lowercaseChar[i]);
    }
  }
  var uppercaseChar = [];
  if (passwordOptions.hasupperCasedCharacters) {
    var uppercaseChar = uppercaseArr[Math.floor(Math.random() * uppercase.lenght)];
    console.log(uppercaseChar);
  }
  var numbersChar = [];
  if (passwordOptions.hasNumericCharacters) {
    var numbersChar = numbersArr[Math.floor(Math.random() * numbers.lenght)];
    console.log(uppercaseChar);
  }
  var symbolChar = [];
  if (passwordOptions.hasSpecialCharacters) {
    var symbolChar = symbols[Math.floor(Math.random() * symbols.lenght)];
    console.log(symbolsChar);
  }

  var finalChar = passwordChar[Math.floor(Math.random() * passwordOptions.length)];
  console.log(finalChar);
};

//Gen password clickEvent
// resultEl.innerText=generatePassword()
document.getElementById("display").value = password;

var generatePassword = function () {
  passwordLenght = prompt("How long would you like your Password Lenght");
}

var get = document.querySelector("#generate");
get.addEventListener("click", function () {
  console.log("passwordGenerator");
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

//Generate Password Funtion
generatedPassword = "";
