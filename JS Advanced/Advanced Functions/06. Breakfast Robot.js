let manager = function() {
    let robot = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let products = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        coke: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        omelet: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        cheverme: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };

    return function (input) {
        let inputData = input.split(' ');
        let command = inputData[0];
        let ingredients = inputData[1];
        let quantity = Number(inputData[2]);

        if(command === 'restock'){
            robot[ingredients] += quantity;
            return 'Success'
        }else if (command === 'report'){
            return `protein=${robot.protein} carbohydrate=${robot.carbohydrate} fat=${robot.fat} flavour=${robot.flavour}`
        }else if(command === 'prepare'){
            let selectedProduct = inputData[1];
            let quantity = Number(inputData[2]);
            let currentProduct = products[selectedProduct]


            let canProductBeCooked = true;

            for (let microElement in currentProduct){
                if(currentProduct.hasOwnProperty(microElement)){
                    let value = currentProduct[microElement];
                    if(robot[microElement] < value * quantity){
                        canProductBeCooked = false;
                        return `Error: not enough ${microElement} in stock`

                    }
                }

            }

            if(canProductBeCooked){
                for (let microElement in currentProduct) {
                    if (currentProduct.hasOwnProperty(microElement)) {
                        let value = currentProduct[microElement];
                        robot[microElement] -= value * quantity
                    }
                }
                return 'Success'
            }
        }
    }
};
manager('restock flavour 50');
manager('prepare coke 4');
manager('restock carbohydrate 10');
manager('restock flavour 10');
manager('prepare apple 1');
manager('restock fat 10');
manager('prepare burger 1');
manager('report');