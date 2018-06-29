function listProcesor(arr) {

    let commandExecutor = (function(){
        let resultArr = [];
        function add(str) {
            resultArr.push(str);
        }
        function remove(str) {
            resultArr = resultArr.filter(el => el !== str);
        }
        function print() {
            console.log(resultArr.join(','));
        }
        return {add, remove, print};
    }());
    for(const element of arr){
        let [comand, value] = element.split(' ');
        commandExecutor[comand](value);
    }
}

listProcesor(['add hello', 'add again', 'remove hello', 'add again', 'print']);