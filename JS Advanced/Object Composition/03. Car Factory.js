function carFactory(carToken) {
    let car = {};
    car.model = carToken.model;
    let engine;
    if(carToken.power <= 90){
        engine = {
            power: 90,
            volume: 1800
        }
    }else if(carToken.power <= 120){
        engine = {
            power: 120,
            volume: 2400
        }
    }else if (carToken.power > 120){
        engine = {
            power: 200,
            volume: 3500
        }
    }
    car.engine = engine;
    car.carriage = {
        type: carToken.carriage,
        color: carToken.color
    };
    let wheels = carToken.wheelsize;
    if(wheels % 2 === 0){
        wheels -= 1;
    }
    car.wheels = [];
    car.wheels.push(wheels);
    car.wheels.push(wheels);
    car.wheels.push(wheels);
    car.wheels.push(wheels);
    return car;
}

console.log(carFactory({
    model: 'Ferrari',
    power: 200,
    color: 'red',
    carriage: 'coupe',
    wheelsize: 21
}));