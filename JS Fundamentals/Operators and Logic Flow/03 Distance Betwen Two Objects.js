function speedBetwenTwoObjects(arr){
    let spOne = arr[0];
    let spTwo = arr[1];
    let time = arr[2];
    let distanceBetwen = (spOne * ((time / 60) / 60) - (spTwo * ((time / 60) / 60))) * 1000;
    distanceBetwen = Math.abs(distanceBetwen);


    console.log(distanceBetwen);
}

speedBetwenTwoObjects([0, 60, 3600]);
speedBetwenTwoObjects([11, 10, 120]);