function oddOrEven(number){
    if(!Number.isInteger(number)){
        console.log("Invalid");
    } else if(number % 2 === 0){
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

oddOrEven(2);
oddOrEven(5);
oddOrEven(1.5);