function letterOcurence(text, letter){
    let counter = 0;
 
    for(let i = 0; i< text.length; i++){
        if(text[i] === letter){
            counter++;
        }
    }
    console.log(counter);
}

letterOcurence('hello', 'l')