//Variant ----1----

function toCapitalCase (userString) {
var arrayFromString = userString.split(/[ \s.,?\-!_:;#^%=+]+/); 
var modifiedString = '';
//console.log(arrayFromString);
for (let i = 0; i < arrayFromString.length; i++) {
    let elementOfArray = arrayFromString[i];
    let firstLetter = elementOfArray.charAt(0).toUpperCase();
    let otherLetters = elementOfArray.substr(1);
    modifiedString += firstLetter + otherLetters + ' ';
  } //console.log(userString);
    console.log(modifiedString);
}
toCapitalCase('we aRe the chamPions yeah sad, but?true-lux_pump!join#learn+go=love%above.done');

//Variant ----2----
/*
var userString = 'we aRe the chamPions yeah sad, but?true-lux_pump!join#learn+go=love%above.done';
var arrayFromString = userString.split(/[ \s.,?\-!_:;#^%=+]+/); 
var modifiedString = '';
function toCapitalCase() {
//console.log(arrayFromString);
for (let i = 0; i < arrayFromString.length; i++) {
    let elementOfArray = arrayFromString[i];
    let firstLetter = elementOfArray.charAt(0).toUpperCase();
    let otherLetters = elementOfArray.substr(1);
    modifiedString += firstLetter + otherLetters + ' ';
  } //console.log(userString);
    console.log(modifiedString);
}
toCapitalCase();
*/