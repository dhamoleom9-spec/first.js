// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

let pass = "ombhau";
let attempt = 0;
let khulgaya = false;

let password = prompt("enter an passward");
attempt++;

if(password === pass) khulgaya = true;

while (password !== pass) {
    if (attempt === 3) {
        console.error("account has been locked");
        break;
    }
    password = prompt("enter an passward");
    attempt++;
    if(password === pass) khulgaya = true;
}

if(khulgaya === true) console.log("access garented");