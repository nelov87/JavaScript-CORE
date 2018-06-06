function validityChecker([x1, y1, x2, y2]) {
    [x1, y1, x2, y2] = [x1, y1, x2, y2].map(Number);

    function checkValidity(x1, y1, x2, y2) {
        let x = x2 - x1;
        let y = y2 - y1;
        let distance = Math.sqrt(x * x + y * y);
        if(distance % 1 === 0) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }

    checkValidity(x1, y1, 0, 0);
    checkValidity(x2, y2, 0, 0);
    checkValidity(x1, y1, x2, y2);
}