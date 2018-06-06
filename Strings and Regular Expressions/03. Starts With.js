function isItStratrsWith(text, substring) {
    if(text.indexOf(substring) === 0){
        console.log('true');
    } else {
        console.log('false');
    }
}

isItStratrsWith('How have you been?', 'how');