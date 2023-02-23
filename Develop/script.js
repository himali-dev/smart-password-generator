// Assignment code here
function generatePassword(){
  var pass = "";
  var pLen = document.querySelector("#passlength").value;
  var ucBox = document.querySelector("#uBox").checked;
  var lcBox = document.querySelector("#lBox").checked;
  var nuBox = document.querySelector("#nBox").checked;
  var syBox = document.querySelector("#sBox").checked;
  var gPass = ucBox+lcBox+nuBox+syBox;


  for(i=0; i<pLen/gPass;i++){
    if(lcBox){
    pass=pass+getRandomLower();
    }
    if(ucBox){
    pass=pass+getRandomUpper();
    }
    if(nuBox){
    pass=pass+getRandomNumber();
    }
    if(syBox){
    pass=pass+getRandomSymbols();
    }

  }
  return pass;

}
function dispBlock() {
  document.querySelector("#hiddenBox").style.display = "block";
}


function getRandomUpper(){
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var a = Math.floor(Math.random()*upperCase.length);
  return upperCase[a];
  }

function getRandomLower(){
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var b = Math.floor(Math.random()*lowerCase.length);
  return lowerCase[b];
}

function getRandomNumber(){
  var numbers = "0123456789";
  var c = Math.floor(Math.random()*numbers.length);
  return numbers[c];
  }

function getRandomSymbols(){
  var symbols = "!#$%&()*+,-./:;<=>?@[\]^_{|}~'";
  var d = Math.floor(Math.random()*symbols.length);
  return symbols[d];
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


// Add event listener to generate button
var startBtn = document.querySelector("#start");
startBtn.addEventListener("click", dispBlock);

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

function rangeValue(){

  value.textContent = sliderChange.value
}
const value = document.querySelector("#value")
const sliderChange = document.querySelector("#passlength");

sliderChange.addEventListener("input", rangeValue);
