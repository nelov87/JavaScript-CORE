function splitString(text, delimeter) {
    let arr = text.split(delimeter);
    console.log(arr.join('\n'));
}

splitString('One-Two-Three-Four-Five', '-');