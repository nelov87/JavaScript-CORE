function upperCase(text) {
    let upperCaseString = text.toUpperCase();
    let words = extractWords();
    words = words.filter(w => w !== '');
    console.log(words.join(', '));
    
    function extractWords() {
        return upperCaseString.split(/\W+/);
    }
}
upperCase("Hi, mdsm asda");