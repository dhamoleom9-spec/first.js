let count = 0;

let num = prompt("enter number")

for(let i = 1; i<=num; i++){
    if(count === 3) break;
    if(i%2!==0){
        console.log(i)
        count++;
    }
}
