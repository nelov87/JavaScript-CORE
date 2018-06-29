let revModule = (function(){
    let count = 0; // private

    function increase(num) {return count += num}
    function decrease(num) {return count -+ num}
    function value() {return count}
    return {increase, decrease, value};

}());

revModule.count = 10;
console.log(revModule.value());
console.log(revModule.increase(5));
console.log(revModule.decrease(1));
