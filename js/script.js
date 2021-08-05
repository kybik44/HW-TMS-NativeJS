// Узнать является ли строка палиндромом.
// Слово палиндром - может читаться справа-налево и слева-направо одинаково. Прим “шалаш”.


// function polindrom(str){

// let newStr = str.split("").reverse().join("");
//     if(str.toLowerCase() === newStr.toLowerCase()){
//         console.log("Слово " + str + " полиндром");
//     }else{
//         console.log("Не полиндром")
//     }
// }
// polindrom("Шалаш");

// Задание 2! Массив уникальных случайных цифр.

// Создадим массив для семи элементов;
// Заполним его случайными цифрами от 0 до 10;
// Цифры в массиве не должны повторяться;
// Вывести этот массив в консоль;
// Упорядочить массив;
// Еще раз вывести его в консоль.

// let arr = [3, 7, 1, 4, 6, 9, 2, 20];

// console.log(arr);
// arr.sort();
// console.log(arr);













//Task 1

function isPangram(string){
    
    console.log(string);
    let newStr = string.split(/\s*/).sort().join("").toLowerCase();
  
    console.log(newStr);
     if(newStr === "abcdefghijklmnopqrstuvwxyz"){
         console.log("Good" + string);
       return string;
     }else{
         console.log("net");
     }
   }
   isPangram("The quick brown fox jumps over the lazy dog");

//Task 2

function accum(s) {
  let newStr = [];
  for(let i = 0; i < s.length; i++){
      if(i === 0){
        let str = s[i].toUpperCase();
        newStr.push(str);
      }else{
        let str = s[i].toUpperCase() + s[i].toLowerCase().repeat(i);    
        newStr.push(str);
        newNew = newStr.join('-');
      }
    
  }
  console.log(newNew);
  return newNew;
 
}

accum("ZpglnRxqenU");

//Task 3

function findShort(s){
   let str = s.split(" ");
   let min = str[0].length;
   for (i = 0; i < str.length; i++) {
       if (str[i].length < min) min = str[i].length;
   }
   console.log(min)
   return min;
  }

  findShort("Привет как дела");

//Task 4

function highAndLow(numbers){
   
    num = numbers.split(" ");
    console.log(num)
    let min = +num[0];
    console.log(min)
    let max = min;
    for (i = 1; i < num.length; ++i) {
        +num[i];
        if (+num[i] > max) max = +num[i];
        if (+num[i] < min) min = +num[i];
    }
    console.log(min, max);
    return min, max;
  }
  highAndLow('5 9 12 8 4 32');




