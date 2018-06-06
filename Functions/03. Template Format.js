function printXMLQuiz(arr) {
    console.log('<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<quiz>');
    for(let i = 0; i < arr.length; i+=2){
        let question = arr[i];
        let answer = arr[i+1];
        console.log('   <question>\n' +
                    `    ${question}\n` +
                    '   </question>');
        console.log('  <answer>\n' +
                    `    ${answer}\n` +
                    '  </answer>');
    }

    console.log('</quiz>');
}

printXMLQuiz(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]);