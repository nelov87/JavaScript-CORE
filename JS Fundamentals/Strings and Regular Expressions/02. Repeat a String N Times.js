function rereatTextNTimes(text, times) {
    let arr = [];
    times = Number(times);
    for(let i = 0; i < times; i++){
        arr.push(text);
    }
    console.log(arr.join(''));
}

rereatTextNTimes('repeat', 5);