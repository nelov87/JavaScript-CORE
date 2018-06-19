function checSumOfRowsAndColumns(input) {



    function sumRow(input) {
        let sumRow = 0;
        let curentRow = 0;
        for(let r = 0; r < input.length; r++){
            for(let c = 0; c < input[r].length; c++){
                curentRow += input[r][c];
            }
            if(r === 0){
                sumRow = curentRow;
            } else {
                if(sumRow !== curentRow){
                    return false;
                }
            }
            curentRow = 0;
        }

        return sumRow;
    }

    function sumColumn(input) {
        let sumColumn = 0;
        let curentColumn = 0;

        for(let c = 0; c < input[0].length; c++){

            for(let r = 0; r < input.length; r++){
                curentColumn += input[r][c];

            }
            if(c === 0 ){
                sumColumn = curentColumn;
            } else {
                if(sumColumn !== curentColumn){
                    return false;
                }
            }
            curentColumn = 0;

        }

        return sumColumn;

    }

    let column = sumColumn(input);
    let row = sumRow(input);

    if(row !== false || column !== false){
        if(column === row){
            return true;
        } else {
            return false;
        }
    } else {
        return false
    }

}


