function locateTresure(input) {
    let Tuvalu = {x1: 1, x2: 3, y1: 1, y2: 3};
    let Tokelau = {x1: 8, x2: 9, y1: 0, y2: 1};
    let Samoa = {x1: 5, x2: 7, y1: 3, y2: 6};
    let Tonga = {x1: 0, x2: 2, y1: 6, y2: 8};
    let Cook = {x1:4,x2:9,y1:7,y2:8};

    for (let i = 0; i < input.length; i+=2) {
        let x = input[i];
        let y = input[i+1];

        if (x>=Samoa.x1 && x<=Samoa.x2 && y>=Samoa.y1 && y<=Samoa.x2) {
            console.log('Samoa');
        }
        else if (x>=Tuvalu.x1 && x<=Tuvalu.x2 && y>=Tuvalu.y1 && y<=Tuvalu.y2){
            console.log('Tuvalu');
        }
        else if (x>=Tokelau.x1 && x<=Tokelau.x2 && y>=Tokelau.y1 && y<=Tokelau.y2) {
            console.log('Tokelau');
        }
        else if (x>=Tonga.x1 && x<=Tonga.x2 && y>=Tonga.y1 && y<=Tonga.y2) {
            console.log('Tonga');
        }
        else if (x>=Cook.x1&& x<=Cook.x2 && y>=Cook.y1 && y<=Cook.y2) {
            console.log('Cook');
        }
        else
            console.log('On the bottom of the ocean');
    }

}