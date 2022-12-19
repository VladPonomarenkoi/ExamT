const readline = require('readline-sync');
const arithmeticProgression = (initial, step) => (n) => {
    let resultProgression = [];
    let nextValue = initial;
    resultProgression.push(initial)
    for (let i = 1; i < n; i++) {
        nextValue += step
        resultProgression.push(nextValue)    
    }

    return resultProgression.reduce((partialSum, a) => partialSum + a, 0);
}

const getTaskArithmeticProgression = arithmeticProgression(1, 2); // start value = 1, step = 2

console.log('Пономаренко Владислав');
console.log('Арифметична прогресія з n=2 (1+3)', getTaskArithmeticProgression(2));
console.log('Арифметична прогресія з n=4 (1+3+5+7)', getTaskArithmeticProgression(4));
console.log('Арифметична прогресія з n=6 (1+3+5+7+9+11)', getTaskArithmeticProgression(6));
console.log('Арифметична прогресія з n=8 (1+3+5+7+9+11+13+15)', getTaskArithmeticProgression(8));

if(process.env.NODE_ENV !== 'test') {
    const consoleN = readline.question('Введіть N для арифметичної прогресії: ')
    console.log(`Арифметична прогресія з n=${consoleN} ${getTaskArithmeticProgression(Number(consoleN))}`);
}


module.exports = getTaskArithmeticProgression