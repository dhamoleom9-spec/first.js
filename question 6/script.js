// Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".

let word = prompt("enter words");
let counter = 0;

while(word !== "stop"){
    if(word === "yes"){
        counter++;
    }
    word = prompt("enter words");
}
console.log(`the total no of yes counted is ${counter}`);
