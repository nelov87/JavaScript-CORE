function printIMGTag([fileName, fileDescription]){
    console.log(`<img src="${fileName}" alt="${fileDescription}">`);
}
printIMGTag(['smiley.gif', 'Smiley Face']);
