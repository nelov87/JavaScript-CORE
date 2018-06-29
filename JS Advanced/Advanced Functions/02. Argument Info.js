function solve() {
    let summery = {};
    for(let i = 0; i < arguments.length; i++){
        let obj = arguments[i];
        let type = typeof obj;
        let objToPrint = obj;
        if(type === "object"){
            objToPrint = '';
        }
        console.log(type + ': ' + objToPrint);
        // if(type === 'object'){
        //
        //     for(let prop in obj){
        //         let typyOfObject = typeof prop;
        //         if(!summery[typyOfObject]){
        //
        //             summery[typyOfObject] = 1;
        //         } else {
        //             summery[typyOfObject]++;
        //         }
        //     }
        // } else{
            if(!summery[type]){

                summery[type] = 1;
            } else {
                summery[type]++;
            }
        //}
    }
    let sortedType = [];
    for(let curent in summery){
        sortedType.push([curent, summery[curent]]);
    }

    for(let curentObj of sortedType){
        console.log(curentObj[0] + ' = ' + curentObj[1]);
    }
}

solve({ name: 'bob'}, 3.333, 9.999);