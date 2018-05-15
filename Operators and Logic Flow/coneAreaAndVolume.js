function cone(r, h){
    let slant = Math.sqrt(r * r + h * h);
    let volume = (Math.PI * r * r * h) / 3;
    let area = Math.PI * r * (r + slant);

    console.log(volume);
    console.log(area);
}

cone(3,5);