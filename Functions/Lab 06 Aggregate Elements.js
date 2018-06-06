function aggregateElements(arr) {
    let sum = 0;
    let invers = 0;
    let concateneted = '';
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        invers += 1 / arr[i];
        concateneted += arr[i];
    }
    console.log(sum);
    console.log(invers);
    console.log(concateneted);
}

aggregateElements([2, 4, 8, 16]);