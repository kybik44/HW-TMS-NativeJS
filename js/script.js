let answer;
let task;
let num1 = null;
let num2 = null;
let answerArr = []
let grade = null;
let erorrArr = []

number = function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
operator = function getRandomOperator() {
    let randomS = (Math.random() * (1 - (-1)) + (-1)).toFixed(1);
    if (randomS >= (-1) && randomS < (-0.5)) {
        return "/";
    } else if (randomS >= (-0.5) && randomS < 0) {
        return "-";
    } else if (randomS >= 0 && randomS < 0.5) {
        return "+";
    } else if (randomS >= 0.5 && randomS <= 1) {
        return "*";
    } else {
        return "Что-то не так";
    }
};
calcResult = function calculator(num1, num2, operator) {
    if (operator === "/") {
        return num1 / num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "+") {
        return num1 + num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else {
        return "Неопознанный оператор";
    }
};

userAnswer = function getAnswer() {
    num1 = number(1, 10);
    num2 = number(1, 10);
    operatorLast = operator();
    trueResult = calcResult(num1, num2, operatorLast);
    randomTask = `${num1} ${operatorLast} ${num2}`;
    answer = prompt(`Решите пример: ${randomTask}`);
    return trueResult, answer, randomTask;
};

function fillArray(trueResult, answer, randomTask) {  
        user = {
            task: randomTask,
            result: trueResult,
            yourAnswer: answer 
        };
        answerArr.push(user);
}
function checkAnswer() {
for(let i = 0; i < 5; i++){
    userAnswer()
    fillArray(trueResult, answer, randomTask)
    if(+answer === trueResult){
        grade++;
    }else{
        erorr = {
            task: randomTask,
            result: trueResult,
            yourAnswer: answer 
        }
        erorrArr.push(erorr);
    }
}
for(znach of erorrArr){
    console.log(`Неправильно решен: ${znach.task}
    Вы ввели ${znach.yourAnswer}, а верно ${znach.result}
    Ваша оценка: ${grade}`)
    }

}

checkAnswer()
