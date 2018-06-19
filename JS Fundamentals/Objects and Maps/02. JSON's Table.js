function createTable(input) {


    console.log('<table>');

    for(let i = 0; i < input.length; i++){
        input[i] = JSON.parse(input[i]);
        console.log('   <tr>');
        console.log(`        <td>${input[i].name}</td>`);
        console.log(`        <td>${input[i].position}</td>`);
        console.log(`        <td>${input[i].salary}</td>`);
        console.log('   <tr>');

    }
    console.log('</table>');

}

createTable([{"name":"Pesho","position":"Promenliva","salary":100000},
    {"name":"Teo","position":"Lecturer","salary":1000},
    {"name":"Georgi","position":"Lecturer","salary":1000}]);