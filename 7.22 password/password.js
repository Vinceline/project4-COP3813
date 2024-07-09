function isStrongPassword(password) {

   var regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\[\]{};':"\\|,.<>\/?~-])(?!.*password)(?!.*(.)\1{3,}).{8,}$/;

    if (password.match(regex))
    {
        return true
    }


    return false;
}


console.log("Testing isStrongPassword()...");

console.log("Qwerty - " + isStrongPassword("Qwerty"));                   // false - Too short, no number, no special character
console.log("passwordQwerty - " + isStrongPassword("passwordQwerty"));   // false - Contains "password"
console.log("qwerty123 - " + isStrongPassword("qwerty123"));             // false - No uppercase chars, no special character
console.log("Qwerty123 - " + isStrongPassword("Qwerty123"));             // false - No special character
console.log("Qaaaa123! - " + isStrongPassword("Qaaaa123!"));             // false - Repeated sequence of four
console.log("Qwerty123! - " + isStrongPassword("Qwerty123!"));           // true
