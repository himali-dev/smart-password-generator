// Assignment code here
function generatePassword(){


  var pass = "";
  var pLen = document.querySelector("#passlength").value;
  var ucBox = document.querySelector("#uBox").checked;
  var lcBox = document.querySelector("#lBox").checked;
  var nuBox = document.querySelector("#nBox").checked;
  var syBox = document.querySelector("#sBox").checked;
  for(i=0; i<pLen;i++){
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

function checkLength(length){
  if (length <128 && length>8){
    return 1;
  }
  else{
    alert ("Not valid");
  }
}


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
