function algorith(num1,num2) {
    return divisor(num1,num2)

    function divisor(num1,num2) {
        if (num2 === 0){
            return num1
        }else {
            return divisor(num2,num1 % num2)
        }
    }
}

console.log(algorith(252, 105));