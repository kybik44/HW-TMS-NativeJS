//Task 1
number = function randomNumber(){
    return Math.round(Math.random());
}; 
function getNumber(num){
           let timer = setInterval(function(){
                    if(num < 60){
                        num++;
                        console.log(num);
                    }else{
                        clearInterval(timer);
                        return console.log("Минута прошла");
                    }
            }, 100);
}
getNumber(number());


// Task 2

let sum = null;

function calc(arr){
    for(let num of arr){
        if(typeof num === 'number' ){
            sum += num;
        }else{
            console.log(`${num} не число`);
        }
    } 
    console.log(sum)
    return sum;  
}
calc([1, 2, 3, 5, 7, '14', 8, 12]);


// Task 3 
function Constructor(arrStr){
    let count = arrStr.length;
    let countStr;
    let newArrStr = [];
    for(i = 0; i < arrStr.length; i++){
        countStr = arrStr[i].length;
        newArrStr.push(countStr);
    }
    let commaArr = arrStr.join(", ");
    
return console.log(`Количество элементов: ${count},
Массив с количеством символов: ${newArrStr},
Массив разделенный запятыми: ${commaArr}`)
}

let consructor = new Constructor(['При', 'ве', 'т', 'пирамида', 'юг', 'параллелограмм'])