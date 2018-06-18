function storeList(input) {
    let products = {};

    for(let i = 0; i < input.length; i++){
        let productInfo = input[i].split(' : ');
        let productName = productInfo[0];
        let price = productInfo[1];

        if(!products.hasOwnProperty(productName[0])){
            products[productName[0]] = [];
        }
        products[productName[0]].push(`  ${productName}: ${price}`);
        products[productName[0]].sort();
    }

    let sortedProducts = ;

    console.log(sortedProducts);

}

storeList(['Appricot : 20.4', 'Fridge : 1500',
    'TV : 1499', 'Deodorant : 10', 'Boiler : 300',
    'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);