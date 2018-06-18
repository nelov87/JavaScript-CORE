function cappyJuice(input) {
    let result = new Map();
    let bottles = new Map();
    for(let i = 0; i < input.length; i++){
        let curentJuice = input[i].split(' => ');

        if(!result.hasOwnProperty(curentJuice[0])){
            result[curentJuice[0]] = 0;
        }
        result[curentJuice[0]] += Number(curentJuice[1]);
        if(result[curentJuice[0]] >= 1000){
            bottles[curentJuice[0]] = result[curentJuice[0]];
        }

    }



    for(let keyToPrint in bottles){
        console.log(`${keyToPrint} => ${Math.floor(bottles[keyToPrint] / 1000)}`);
    }
}

cappyJuice(['Orange => 2000', 'Peach => 1432', 'Banana => 450', 'Peach => 600', 'Strawberry => 549']);