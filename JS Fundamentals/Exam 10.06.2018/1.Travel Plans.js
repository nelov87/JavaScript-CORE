function travelPlans (input) {

    let gold = 0;
    let jobDone = {};
    let counter = {};
    for(let i = 0; i < input.length; i++){
        let tokens = input[i].split(' : ');
        let salary = Number(tokens[1]);
        if(!jobDone.hasOwnProperty(tokens[0])){
            jobDone[tokens[0]] = 0;
            counter[tokens[0]] = 1;
        }
        if(speciality(tokens[0]) === 'Specialized'){
            if(salary >= 200){


                if(counter[tokens[0]] % 2 === 0){
                    jobDone[tokens[0]] += (salary * 0.80) + 200;
                } else {
                    jobDone[tokens[0]] += (salary * 0.80);
                }
                counter[tokens[0]]++;
            }

        } else if (speciality(tokens[0]) === 'Average' ){
            jobDone[tokens[0]] += salary;
        }else if(speciality(tokens[0]) === 'Clumsy'){


            if(counter[tokens[0]] % 2 === 0){
                jobDone[tokens[0]] += salary * 0.95;
            } else if(counter[tokens[0]] % 3 === 0){
                jobDone[tokens[0]] += salary * 0.90;
            } else{
                jobDone[tokens[0]] += salary;
            }
            counter[tokens[0]]++;

        }


    }

    let mony = 0;
    for(let key in jobDone){
        mony += jobDone[key];

    }

    if(mony < 1000){
        console.log(`Final sum: ${mony.toFixed(2)}`);
        console.log(`Mariyka need to earn ${(1000 - mony).toFixed(2)} gold more to continue in the next task.`);
    } else if(mony === 1000){
        console.log(`Final sum: ${mony.toFixed(2)}`);
    }
    else {
        console.log(`Final sum: ${mony.toFixed(2)}`);
        console.log(`Mariyka earned ${(mony - 1000).toFixed(2)} gold more.`);
    }





    function speciality(job) {
        if(job === 'Programming' || job === 'Hardware maintenance'
            || job === 'Cooking' || job === 'Translating' || job === 'Designing'){
            return 'Specialized';
        } else if(job === 'Driving' || job === 'Managing' || job === 'Fishing' || job === 'Gardening'){
            return 'Average';
        } else if(job === 'Singing' || job === 'Accounting' || job === 'Teaching' || job === 'Exam-Making'
            || job === 'Acting' || job === 'Writing' || job === 'Lecturing' || job === 'Modeling' || job === 'Nursing'){
            return 'Clumsy';
        }
    }
}

travelPlans(["Programming : 500", "Driving : 243", "Singing : 100", "Cooking : 199"]);
travelPlans(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199", "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"]);