function ocurences(text, word) {
    let patern = new RegExp("\\b" + word + "\\b", "gi");
    let words = [];

    let match = patern.exec(text);

    while (match){
        words.push(match[0]);
        match = patern.exec(text);
    }

    console.log(words.length);
}

ocurences('The waterfall was so high, that the child couldn’t see its peak.', 'the');