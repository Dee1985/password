// computer generates random password using character types:  uppercase, lowercase, numbers and/or special characters. 
const upperCase = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = " abcdefghijklmnopqrstuvwxyz";
const numbers = " 0123456789";
const special = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

function password(){
    const upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    const randomIndex = Math.floor(Math.random() * upperCase.length);
     console.log(randomIndex);
    const generat = uppercase[randomIndex]
    }


//user needs to select at least one character type- if no selection computer will read "error- please select a character"


//user to select length of password: 1- 128
// onclick- button should generate password from arrays established
// ** bonus: have a copy password option available
