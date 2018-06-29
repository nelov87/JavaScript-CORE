function fibonachi() {
    let first = 0;
    let secund = 1;
    return function () {
        let next = first + secund;
        first = secund;
        secund = next;
        return first;
    }
}

let fib = fibonachi();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());