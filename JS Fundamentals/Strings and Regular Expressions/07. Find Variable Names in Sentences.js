function findVarNames(text) {
    let patern = /\b_([A-Za-z0-9]+)\b/g;
    let names = [];

    let match = patern.exec(text);

    while (match){
        names.push(match[1]);
        match = patern.exec(text);
    }

    console.log(names.join(','));
}

findVarNames('Calculate the _area of the _perfectRectangle object.');