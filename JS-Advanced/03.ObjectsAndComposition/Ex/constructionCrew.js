function solve(worker) {

    const requiredAmount = 0.1;

    if(worker.dizziness) {
        let waterNeeded = requiredAmount * worker.weight * worker.experience;
        worker.levelOfHydrated += waterNeeded;
        worker.dizziness = false;
    }

    return worker;
}