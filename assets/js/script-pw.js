function generatePW() {
    // define result variable 
    var password = "";
    // define allowed characters
    var characters = "0123456789@#$%!-&*ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var long = "64";
    for (var i = 0; i <= long; i++) {
        // generate password
        gen = characters.charAt(Math.floor(Math.random() * characters.length));
        password += generate;
    document.getElementById('pass').value = password;
    }

    function generatePW2() {
        var length = 64,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.random() * n);
        }
        return retVal;
    }
}
// Copy password button
function copy() {
    // get password from input text field
    var copyText = document.getElementById("pass");
    // Set selection range to copy longer text on mobile devices
    copyText.setSelectionRange(0, 9999);
    //Copy the text from the text field 
    navigator.clipboard.writeText(copyText.value);
    // Get the toast container
    var x = document.getElementById("toast")
    // Add the "show" class to the container
    x.className = "show";
    //Show toast for 3sec
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}