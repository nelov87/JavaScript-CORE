function assignPropertiestoObject ([prOne, valOne, prTwo, valTwo, prTree, valTree]){
    let obj = {};

    obj[prOne] = valOne;
    obj[prTwo] = valTwo;
    obj[prTree] = valTree;

    console.log(obj);
}

assignPropertiestoObject(['name', 'Pesho', 'age', '23', 'gender', 'male']);