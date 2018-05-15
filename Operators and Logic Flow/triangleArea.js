function triangleArea(a, b, c){
    let hlafOfSides = (a + b +c) / 2;
    let area = Math.sqrt(hlafOfSides * (hlafOfSides - a) * (hlafOfSides - b) * (hlafOfSides - c));
    console.log(area);
}

triangleArea(2, 3.4, 4);