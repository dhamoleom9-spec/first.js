let massage = prompt("enter an massage");
if (massage === null) {
    console.error("you cancelled it ");
}
else {
    massage = massage.trim() === Number
    if(massage = Number){
        console.error("pleaase enter an massage instead of number")
    }
    else if (massage.trim() === "") {
        console.error("please enter the correct massage")
    }
    else {
        console.log(`you entered an correct massage ${massage}`)
    }
}


// for a number 

// let age = prompt("enter an valid number.......!");
// if (age === null) {
//     console.error("abe bhosadi chya cancle kaun karta");
// }
// else {
//     if (age.trim() === "") {
//         console.error("abe chodrya kai tar leh n ");
//     }
//     else{
//         age = Number(age.trim());
//         if(isNaN(age)){
//             console.error(`abr salya he ky ${age} number leh n`);
//         }
//         else{
//             console.log(`you entered correct number ${age} congratulations`);
//         }
//     }
// }
