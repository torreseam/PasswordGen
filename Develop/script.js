// concatenate password values

var passwordLenght = 0;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOQRSTUVWXYZ";
var specialCharacter = "~!@#$%^&*()_+{}|:<>?,.';'[]\=-`";
var numberValue = "123456789";


var generatePassword = function () {
  passGroup = "";
  upperPassword = "";
  passwordLenght = promptPasswordLenght();
}

// placeholder button selector
var get = document.querySelector("#generate");

createPassword();

get.addEventListener("btn", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

//execute



var generatePassword = window.prompt("PromptPasswordLenght");
var playerHealth = 100;
var playerAttack = 10;

console.log(passwordLenght);





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

for (var i = 0; i < enter; i++) {
  var pickChoices = choice[Math.floor(Math.random() * choice.length())];
  password.push(pickChoices);
}

var ps = password.join("");
UserInput(ps);
return ps;
};

function UserInput(ps) {
  document.getElementById("password").textContent = ps;

}