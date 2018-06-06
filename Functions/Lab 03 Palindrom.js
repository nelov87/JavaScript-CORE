function isPalindrom(str){
    let rev = str.split("").reverse().join("");

    if(str === rev){
        console.log(true);
    } else{
        console.log(false);
    }
}

isPalindrom("ahha");