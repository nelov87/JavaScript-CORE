function largestNumber(arr) {
    arr.map(Number);
    arr.sort((a,b) => a-b);

    //for(let i = arr.length - 1; i>arr.length - 4; i--){
    //    if(arr[i]!== undefined){
    //        console.log(arr[i]);
    //    }
    //}
    console.log(arr[arr.length -1]);
}

largestNumber([130, 5, 99]);