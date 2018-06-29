function workerChanger(worker) {
    if(worker.handsShaking){
        worker.bloodAlcoholLevel += worker.weight * worker.experience * 0.1;
        worker.handsShaking = false;
    }
    return worker;
}

console.log(workerChanger({
    weight: 80,
    experience: 1,
    bloodAlcoholLevel: 8,
    handsShaking: false
}));