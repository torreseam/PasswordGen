// var genButton = document.querySelector("#generate");
// console.log("generate button");
var passwordText = document.querySelector("#password");
var psButton = document.querySelector("#generate");
psButton.addEventListener('click', generatePassword)

//Character Array
var symbArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "`", "~", "{", "[", "]", "}"];
var numbArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerArr = ["a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var inputCharSet = "";
var choices = "";

function generatePassword() {
  var passwordLength = Number(prompt("How many characters would you like in your passowrd (Choose between 8 to 128)"));
  console.log(passwordLength)

  // if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
  //   passwordLength = Number(prompt("Invalid, try again!"));
  // }

  var lowercase = confirm("Do you want all LowerCase?");
  var uppercase = confirm("Do you want all UpperCase?");
  var numbers = confirm("Do you want numbers?");
  var symbols = confirm("Do you want symbols?");

  console.log("-->", lowercase, uppercase, numbers, symbols)
  // if (!(lowercase && uppercase && numbers && symbols)) {
  //   alert("Pick one type");
  //   lowercase = confirm("Do you want all LowerCase?");
  //   uppercase = confirm("Do you want all UpperCase?");
  //   numbers = confirm("Do you want numbers?");
  //   symbols = confirm("Do you want symbols?");
  //   console.log(lowercase, uppercase, numbers, symbols);
  // }
  var passcodeOptions = {
    size: passwordLength,
    hasSpecialCharacters: symbols,
    hasNumericCharacters: numbers,
    hasLowercaseCharacters: lowercase,
    hasUppercaseCharacters: uppercase,
  };
  //return passcodeOptions;
  generate(passcodeOptions)
}

function generate(passwordOptions) {
 // var passwordOptions = generatePassword();
  var passwordChar = [];
  var lowercaseChar = [];
  var uppercaseChar = [];
  var numberChar = [];
  var symbolChar = [];
  var choices = []

  if (passwordOptions.hasLowercaseCharacters) {
    console.log("low")
    passwordChar.push(lowerArr[Math.floor(Math.random() * lowerArr.length)])
    choices = choices.concat(lowerArr)
    console.log("1: ", passwordChar)
    // for (var i = 0; i < passcodeOptions.length; i++) {
    //   var lowercaseChar = lowerArr[Math.floor(Math.random() * passcodeOptions.length)];
    //   passwordChar.push(lowercaseChar);
    //   console.log("lowercaseChar");
    // }
  }

  console.log("bvefore 2: ", passwordOptions.hasUppercaseCharacters)
  if (passwordOptions.hasUppercaseCharacters) {

    passwordChar.push(upperArr[Math.floor(Math.random() * upperArr.length)])
    choices = choices.concat(upperArr)
    console.log("2: ", passwordChar)
    // for (var i = 0; i < passcodeOptions.length; i++) {
    //   var uppercaseChar = upperArr[Math.floor(Math.random() * passcodeOptions.length)];
    //   passwordChar.push(uppercaseChar);
    //   console.log(uppercaseChar);
    // }
  }

  if (passwordOptions.hasNumericCharacters) {
    passwordChar.push(numbArr[Math.floor(Math.random() * numbArr.length)])
    choices = choices.concat(numbArr)
    console.log("3: ", passwordChar)
    // for (var i = 0; i < passcodeOptions.length; i++) {
    //   var numberChar = numbArr[Math.floor(Math.random() * passcodeOptions.length)];
    //   passwordChar.push(numberChar);
    //   console.log(numberChar);
    // }
  }

  if (passwordOptions.hasSpecialCharacters) {
    passwordChar.push(symbArr[Math.floor(Math.random() * symbArr.length)])
    choices = choices.concat(symbArr)
    console.log("4: ", passwordChar)
    // for (var i = 0; i < passcodeOptions.length; i++) {
    //   var symbolChar = symArr[Math.floor(Math.random() * passcodeOptions.length)];
    //   passwordChar.push(symbolChar);
    //   // console.log(symbolChar);
    // }
  }

  var resto = passwordOptions.size - passwordChar.length
  console.log(resto, choices)
  for (i = 0; i < resto; i++) {
    passwordChar.push(choices[Math.floor(Math.random() * choices.length)])

  }
  console.log("pass array: ", passwordChar)
  passwordText.value = passwordChar.join("")
  console.log(passwordText)


  // return (results);
};


//Add Event Listener
// // let psButton = document.getElementById('generate');
// // var psButton = document.querySelector("#generate");
// psButton.addEventListener('click', generatePassword())