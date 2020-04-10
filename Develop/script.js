//Character Array
var symbArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "`", "~", "{", "[", "]", "}"];
var numbArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerArr = ["a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function generatePassword() {
  var passwordLength = Number(prompt("How many characters would you like in your passowrd (Choose between 8 to 128)"));
  console.log(passwordLength)

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128)
    passwordLength = Number(prompt("Invalid, try again!"));

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
    console.log(lowercase, uppercase, numbers, symbols);
  }
  var passcodeOptions = {
    length: passwordLength,
    hasSpecialCharacters: symbols,
    hasNumericCharacters: numbers,
    hasLowercaseCharacters: lowercase,
    hasUppercaseCharacters: uppercase,
  };
  return passcodeOptions;
}
function generate() {
  var passwordOptions = generatePassword();
  var passwordChar = [];
  var lowercaseChar = [];
  var uppercaseChar = [];
  var numberChar = [];
  var symbolChar = [];

  if (passwordOptions.hasLowercaseCharacters) {
    for (var i = 0; i < passcodeOptions.length; i++) {
      var lowercaseChar = lowerArr[Math.floor(Math.random() * passcodeOptions.length)];
      passwordChar.push(lowercaseChar);
      console.log("lowercaseChar");
    }
  }

  if (passcodeOptions.hasuppercaseCharacters) {
    for (var i = 0; i < passcodeOptions.length; i++) {
      var uppercaseChar = upperArr[Math.floor(Math.random() * passcodeOptions.length)];
      passwordChar.push(uppercaseChar);
      console.log(uppercaseChar);
    }
  }

  if (passcodeOptions.hasNumericCharacters) {
    for (var i = 0; i < passcodeOptions.length; i++) {
      var numberChar = numbArr[Math.floor(Math.random() * passcodeOptions.length)];
      passwordChar.push(numberChar);
      // console.log(numberChar);
    }
  }

  if (passwordOptions.hasSpecialCharacters) {
    for (var i = 0; i < passcodeOptions.length; i++) {
      var symbolChar = symArr[Math.floor(Math.random() * passcodeOptions.length)];
      passwordChar.push(symbolChar[i]);
      // console.log(symbolChar);
    }
  }
  var generatePasswordValue = [];
  for (var i = 0; i < passcodeOptions.lenght; i++) {
    var passwordResult = passwordChar[Math.floor(Math.random() * passcodeChar.length)];
    generatePasswordValue.push(passwordResult);
    console.log(passwordResult = generatePasswordValue);
  }
  var ps = generatePasswordValue.join("");
  UserInput(ps);
  return ps;
};
//Add Event Listener
let psButton = document.getElementById('generate');
psButton.addEventListener('click', generatePassword())

