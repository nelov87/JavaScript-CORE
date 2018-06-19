function chesboard(n){
    console.log('<div class="chessboard">');
    

    for(let row = 0; row < n; row++){
        console.log('<div>');
        let color = (row % 2 == 0) ? 'black' : 'white';
        for(let j = 1; j <= n; j++){
            
            console.log(`<span class="${color}"></span>`);
            color = (color == 'black') ? 'white' : 'black';
        }
        console.log('</div>');
    }
    console.log('</div>');

}

chesboard(10);