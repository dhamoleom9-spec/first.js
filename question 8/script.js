// Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.
let number = +prompt("enter an number");
var sum = 0;
for(let i = 1; i<=number; i++){
    if(i%2 !== 0){
        sum = sum + i;
    }
}
console.log(sum);

// let sum = 0;

// for(let i = 1; i<=30; i++){
//     if(i%2 !== 0){
//         sum = sum + i;
//     }
// }
// console.log(sum)


