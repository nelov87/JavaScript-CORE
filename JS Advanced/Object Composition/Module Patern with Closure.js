let modulObj = (function(){
    let count = 0; // private
    return {
        count: 0, // public
        increase: function (num) {return count += num},
        decrease: function (num) {return count -+ num},
        value: function () {return count}
    };
}());




modulObj.count = 10;
console.log(modulObj.value());
console.log(modulObj.increase(5));
console.log(modulObj.decrease(1));