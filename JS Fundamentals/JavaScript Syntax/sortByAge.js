function sortByAge(minAga, nameA, ageA, nameB, ageB){
    let personA = {name:nameA, age:ageA};
    let personB = {name:nameB, age:ageB};
    if(personA.age >= minAga){console.log(personA)}
    if(personB.age >= minAga){console.log(personB)}
   
}

sortByAge(12, 'Ivan', 15, 'Asen', 9);