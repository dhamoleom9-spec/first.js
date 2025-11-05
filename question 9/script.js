// Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.
let count = 0;
let num = prompt("enter number's");
num = Number(num);

while(num%2!== 0){
    num = prompt("enter number's")
    num = Number(num);
    count++;
}
console.log(`the total odd number is ${count}`)


if(num%2===0) console.log(`you entered even number: ${num}`);
