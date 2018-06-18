function findAllNumbers(text) {
    let patern = /[0-9]+/g;
    let numbers = [];
    for(let line of text){
        let match = patern.exec(line);
        while (match){
            numbers.push(match[0]);
            match = patern.exec(line);
        }
    }
    console.log(numbers.join(' '));
}

findAllNumbers('The300 What is that? I think it’s the 3rd movie. Lets watch it at 22:45');