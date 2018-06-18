function printSpeedSeveryty(inputArr) {
    let speed = inputArr[0];
    let area = inputArr[1];

    if(speedOverTheLimit(speed, area) > 40){
        console.log('reckless driving');
    } else if(speedOverTheLimit(speed, area) > 20){
        console.log('excessive speeding');
    } else if(speedOverTheLimit(speed, area) > 0){
        console.log('speeding');
    }

    function speedOverTheLimit(s, a) {
     let motorway = 130;
     let interstate = 90;
     let city = 50;
     let residential = 20;

     if(a === 'motorway'){
         return s - motorway;
     }
     if(a === 'interstate'){
         return s - interstate;
     }
     if(a === 'city'){
         return s - city;
     }
     if(a === 'residential'){
         return s - residential;
     }
    }
}

printSpeedSeveryty([40, 'city']);
printSpeedSeveryty([21, 'residential']);
printSpeedSeveryty([120, 'interstate']);
printSpeedSeveryty([200, 'motorway']);
