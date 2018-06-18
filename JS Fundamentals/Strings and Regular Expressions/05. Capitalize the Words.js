function capitalizeFirstLeter(text) {
    let arr = text.split(' ');
    for(let i = 0; i < arr.length; i++){
        let firstLeter = arr[i].slice(0,1);
        let rest = arr[i].slice(1, arr[i].length);
        arr[i] = firstLeter.toUpperCase() + rest.toLowerCase();
    }
    console.log(arr.join(' '));
}

capitalizeFirstLeter('Was that Easy? tRY thIs onE for SiZe!');