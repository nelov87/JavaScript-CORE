let closure1 = (function createClosure() {
    let counter = 0;
    return function () {
        console.log(counter++)
    }
})();



closure1();
closure1();
closure1();
closure1();

closure1();