function inchesToFoot(num){
    let foot = Math.abs(num / 12);
    let inchesLeft = num % 12;

    console.log(`${Math.floor(foot)}'-${inchesLeft}"`);
}

inchesToFoot(55);