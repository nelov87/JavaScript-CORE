function printArrayWithDelimeter(input) {
    let delimeter = input[input.length - 1];
    input.pop();

    console.log(input.join(delimeter));


}

printArrayWithDelimeter(['One', 'Two', 'Three', 'Four', 'Five', '-']);