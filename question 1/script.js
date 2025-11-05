let age = prompt("enter your age")

if(age === null){
    console.error("please prabhu enter someting don't cancle it");
}
else{
    if(age.trim() === ""){
        console.error("please prabhu enter someting")
    }
    else{
        age = Number(age.trim())
        if(isNaN(age)){
            console.error("prabhu number enter kara string nahi")
        }
        else if(age < 0){
            console.error("enter an valid number")
        }
        else if(age >= 18){
            console.log("eligable for driving")
        }
        else{
            console.log("you are not eligable for voting")
        }
    }
}