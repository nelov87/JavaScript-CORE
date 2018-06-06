function printTable(num) {
    console.log('<table border="1">');
    console.log('<tr><th>x</th>');
    for(let k = 1; k <= num; k++){
        console.log(`<th>${k}</th>`);
    }
    console.log('</tr>');


    for(let i = 1; i <= num; i++){
        console.log('<tr>');
        console.log(`<th>${i}</th>`);

        for(let j = 1; j <= num; j++){
            console.log(`<td>${j * i}</td>`);
        }

        console.log('</tr>');
    }

    console.log('</table>');
}

printTable(3);