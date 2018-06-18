function decode(input) {
    let replaicment = input[2];
    let country = '';
    let town = '';
    let patern = new RegExp("\\b[A-Z]{1}[a-z]{1,}[A-Z]{1}\\b", "g");
    let numberPatern = new RegExp("\\d{3}(\\.\\d{1,})*", "g");
    let countryToDecode = patern.exec(input[3]);
    let numbers = [];
    let text = input[3];
    let match = numberPatern.exec(text);
    let from = input[0];
    let to = input[1];


    while (match){
        numbers.push(match[0]);
        match = numberPatern.exec(text);
    }

    numbers = numbers.map(x => Math.ceil(x));

    for(let i = 0; i < numbers.length; i++){
        town += String.fromCharCode(numbers[i]);
    }

    town = town.charAt(0).toUpperCase() + town.slice(1);

    country = countryToDecode[0].substring(0, Number(from));
    country += replaicment;
    country+= countryToDecode[0].substr(Number(to) + 1);

    country = country.substring(0, country.length-1) + country.charAt(country.length - 1).toLowerCase();
    console.log(`${country} => ${town}`);
}

decode(["3", "5", "gar","114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"]);
decode(["1", "4","loveni", "SerbiA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity  Bulg35aria - VarnA railLery1a0s1 111 an unpacked as 109 he"]);