// JS PW GENERATOR

var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numericalChar = "0123456789";
var specialChar = "!#$%&'()*+-./:;<=>?@[\^_`{|}~";

function generatePW() {
    var password = "";
    var passwordChar = "";
    // PROMPT FOR LENGTH
    var passwordLengthUser = prompt("How many characters would you like your password to be? Password must be between 10 to 64 characters.");
    passwordLengthUser = parseInt(passwordLengthUser);
    if (passwordLengthUser < 10) {
        alert("Password must have more than 10 characters!");
        return "";
    }
    if (passwordLengthUser > 64) {
        alert("Password must be at least 10 and not have more than 64 characters!");
        return ""
    }
    // PROMPT FOR LOWER CASE
    var lowercaseCharactersChoice = confirm("Sprinkle in some lowercase characters?");
    if (lowercaseCharactersChoice) {
        passwordChar += lowercaseChar;
    }
    // PROMPT FOR UPPER CASE
    var uppercaseCharactersChoice = confirm("How about a few uppercase letters?");
    if (uppercaseCharactersChoice) {
        passwordChar += uppercaseChar;
    }
    // PROMPT FOR NUMBERS
    var numericalCharactersChoice = confirm("What’s a password without a couple of numbers? Would you like to add them to yours?");
    if (numericalCharactersChoice) {
        passwordChar += numericalChar;
    }
    // PROMPT FOR SPECIAL CHARACTERS
    var specialCharacterChoice = confirm("Your password is pretty secure already, but how about a dash of special characters?");
    if (specialCharacterChoice) {
        passwordChar += specialChar;
    }
    for (var i = 0; i < passwordLengthUser; i++) {
        password = passwordChar[Math.floor(Math.random() * passwordChar.length)]
    }

    function writePassword(password) {
        // var password = generatePass();
        var pwTextArea = document.getElementById("#password");
        pwTextArea.value = password;
        return ("")

    }
    console.log(writePassword)
}
generateBtn.addEventListener("click", generatePass);

function copy(password) {
    var copyText = document.getElementById("password");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert("Copied" + copyText.value);
}