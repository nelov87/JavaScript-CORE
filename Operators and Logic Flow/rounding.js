function roundTo(arr){
    let num = Number(arr[0]);
    let precision = Number(arr[1]);
    
    if(precision > 15){
        precision = 15;
    }

    num = Number(num).toFixed(precision);
    console.log(Number(num));
}

roundTo([10.5, 3]);