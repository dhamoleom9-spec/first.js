//  Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.
let count = 0;
let number = prompt("enter an number to get 7 divisible")

for(let i = 1; i<=number; i++){
    if(i%7 === 0){
        console.log(i)
        count++;
    }
}
console.log(`the total no bivisible by 7 is ${count}`)