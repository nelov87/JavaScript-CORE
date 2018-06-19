function clacNextDate(year, month, day){
    let date = new Date(year, month-1, day);
    let oneDay = 24 * 60 * 60 * 1000;
    let nexDate = new Date(date.getTime() + oneDay);
    console.log(nexDate.getFullYear() + '-' + (nexDate.getMonth() +1) + '-' + nexDate.getDate())
}

clacNextDate(2016, 9, 30)