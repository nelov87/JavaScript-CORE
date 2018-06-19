function arrElements(input) {
    let arr = [];
    if(input.includes("add")){
        for(let i = 0;i < input.length; i++){
            if(input[i] === 'add'){
                arr.push(i+1);
            } else if(input[i] === 'remove'){
                arr.pop();
            }
        }
    } else{
        console.log('Empty');
    }

    if(arr.length > 0){
        console.log(arr.join('\n'));
    } else{
        console.log('Empty');
    }
}

arrElements(['add', 'add', 'remove', 'add', 'add']);
arrElements(['add', 'remove', 'remove', 'remove']);