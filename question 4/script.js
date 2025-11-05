//Ask user for password and print access status
// Hardcoded correct password. Compare with user input.

let pass = "992164";
let password = prompt("enter the password");

if (password === null) {
    console.error("you cancelled it ");
}
else {
    if (password.trim() === "") {
        console.error("enter something")
    }
    else {
        password = Number(password.trim())
        if (isNaN(password)) {
            console.error("enter an pin not a string")
        }
        else if (password < 0) {
            console.log("bhava barobar tak pass")
        }
        else if (pass = password) {
            console.log("accass granted");
        }
        else {
            console.log("access denayed")
        }

    }
}