function stringOfNumbers(numString){
    let result = '';
    let num = Number(numString);

    for(let i = 1; i <= num; i++){
        result += `${i}`;
    }
    console.log(result);
}

stringOfNumbers('11')