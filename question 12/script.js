// Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

let count = 0;
for(let i=1; i<=5; i++){
    let num = prompt("enter an number");

    if(num > 0){
        console.log(i)
        count++;
    }
}

console.log(`the ccount is ${count}`)