console.log("file of loops in javascript")

console.log(" Q number 1")
for(let i=1; i<=100; i++){
    if( i%3 === 0 && i%5 === 0){
        console.log("divisbal by 3 and 5");
    }
    else if(i % 3 === 0){
        console.log("divisbal by 3");
    }
    else if(i % 5 === 0){
        console.log("divisbal by 5");
    }
    else if(i % 2 === 0){
        console.log("divisbal by 2")
    }
    else{
        console.log(i);
    }

}

console.log(" Q number 2")

for(let j=1; j<=100; j++){
    if(j % 2 === 0){
        console.log("even number ahe re ba ha")
    }
    else if(j % 2 !== 0){
        console.log("odd number ahee re ba ha ")
    }
}

for(let i = 1; i<=10; i++){
    if(i%2 === 0) console.log(`${i} - even`);
    else console.log(`${i} - odd`)
}
