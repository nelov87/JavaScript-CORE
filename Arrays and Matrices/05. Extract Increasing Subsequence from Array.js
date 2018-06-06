function incrisingSubsiquence(input) {
    arr = [];
    input = input.map(Number)
    arr.push(input[0]);
    for(let i = 1; i < input.length; i++){
        let last = arr[arr.length - 1]
        if(last <= input[i]){
            arr.push(input[i]);
        }
    }
    console.log(arr.join('\n'));
}
//////////////////////////////////////////////////////////////////////


incrisingSubsiquence([1,3,8,4,10,12,3,2,24]);
