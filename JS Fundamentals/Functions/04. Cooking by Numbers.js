function result(input) {
    let num = input.shift();

    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'chop') num/=2;
        else if (input[i] === 'dice') num=Math.sqrt(num);
        else if (input[i] === 'spice') num+=1;
        else if (input[i] === 'bake') num*=3;
        else if (input[i] === 'fillet') num-=num*0.2;
        console.log(num);
    }

}