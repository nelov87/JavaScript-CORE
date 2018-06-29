function solve(arr, command) {
    function asc(arr) {
        arr = arr.sort((a,b) => a - b);
        return arr;
    }
    
    function desc(arr) {
        arr = arr.sort((a,b) => b - a);
        return arr;
    }

    if(command === 'asc'){
        return asc(arr);
    } else if(command === 'desc'){
        return desc(arr);
    }

}

solve([14, 7, 17, 6, 8], 'asc');
solve([14, 7, 17, 6, 8], 'desc');