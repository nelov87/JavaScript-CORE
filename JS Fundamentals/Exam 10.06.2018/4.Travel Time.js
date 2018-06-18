function travelTime(input) {
    let countries = {};

    for(let i = 0; i < input.length; i++){
        let curent = input[i].split(' > ');
        let town = curent[1];
        if(!countries.hasOwnProperty(curent[0])){
            countries[curent[0]] = new Map;
        }
        countries[curent[0]].set(town, curent[2]);
    }

    let keys = [];
    for(let key in countries){
        keys.push(key);
    }
    keys.sort();
    let sortedCountries = {};
    for(let key of keys){
        sortedCountries[key] = countries[key];
    }
    for(let key in sortedCountries){
        let result = key + ' -> ';
        for(let kkk in sortedCountries[key]){
            result += kkk + ' -> ' + sortedCountries[key][kkk];
        }
        console.log(result);
    }


}

travelTime(["Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200" ]);