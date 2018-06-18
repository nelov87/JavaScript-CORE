function lastDateOfMonth([day, month, year]){
    [day, month, year] = [day, month, year].map(Number);
    let dateToWork = new Date(year, month -1, 0);
    let lastDay = dateToWork.getDate();
    
    console.log(lastDay);
}

lastDateOfMonth([17, 3, 2002]);