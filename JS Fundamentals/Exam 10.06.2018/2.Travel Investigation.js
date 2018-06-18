function investigation(input) {
    let delimeter = input[1];
    let companies = input[0].split(`${delimeter}`);
    let valid = [];
    let invalid = [];
    input = input.map(x => x.toLowerCase());


    for(let i = 2; i < input.length; i ++){
        let arr = [];
        for(let j = 0; j < companies.length; j++) {
            if(input[i].indexOf(companies[j]) > -1){
                arr.push('yes');
            } else {
                arr.push('no');
            }
        }
        if(arr.indexOf('no') > -1){
            invalid.push(input[i]);
        } else{
            valid.push(input[i]);
        }
    }

    if(valid.length > 0){
        console.log('ValidSentences');
        for(let k = 0; k < valid.length; k++){
            console.log(`${k+1}. ${valid[k]}`);
        }
    }
    if(invalid.length > 0){
        if(valid.length > 0){
            console.log('='.repeat(30));
        }
        console.log('InvalidSentences');
        for(let h = 0; h < invalid.length; h++){
            console.log(`${h+1}. ${invalid[h]}`);
        }
    }

}

investigation(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@, ",
    "Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
    "someone continues as no "]);