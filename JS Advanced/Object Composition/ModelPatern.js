let modulObj = {
    count: 0, // public
    increase: function (num) {return this.count += num},
    decrease: function (num) {return this.count -+ num},
    value: function () {return this.count}
};

modulObj.count = 2;
console.log(modulObj.value());
console.log(modulObj.increase(5));
console.log(modulObj.decrease(1));