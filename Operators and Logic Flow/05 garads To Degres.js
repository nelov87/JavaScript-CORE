function gradsToDegrees(grad){
    let degree = 0.9 * Math.abs(grad);
    degree = degree % 360;
    if(grad < 0 ){
        degree = 360 - degree;
    }

    if(degree === 360){
        console.log(0);
    } else {
        console.log(degree);
    }


}

gradsToDegrees(-50);