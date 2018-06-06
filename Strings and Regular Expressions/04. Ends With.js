function isItEndsWith(text, substring) {
    let indexTocompare = Number(text.length - substring.length);
    if(text.lastIndexOf(substring) === indexTocompare){
        console.log('true');
    } else {
        console.log('false');
    }
}

isItEndsWith('This sentence ends with fun?', 'fun?');