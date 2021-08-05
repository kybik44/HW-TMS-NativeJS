//Task 1
function getSum(num) {
    let sum = null;
    for (let i = 0; i <= num; i++) {
        sum += i;   
    }
    console.log(sum);
}
getSum(100);

//Task 2

function uppercaseSymbol(str){
    let arr = str.split(" ");

for(let i = 0; i < arr.length; i++){
    let newWord = arr[i][0].toUpperCase() + arr[i].slice(1);
    arr[i] = newWord;

}
str = arr.join(" ");
return console.log(str);

}
uppercaseSymbol("привет, как твои дела, чем занимаешься?");

//Task 3

function ltrim(str){    
    newStr = str.trimLeft();
    console.log(newStr);
    return newStr;
}
function rtrim(str){    
   console.log(str.length)
   newStr = str.replace(" ", '');
    console.log(newStr);
}
function trim(str){    
    newStr = str.trim();
    console.log(newStr);
    return newStr;
}
ltrim(" Hello ");
rtrim(" Hello ");
trim(" Hello ");

//Task 4

let obj = { }
function getObject(firstArr, secondArr){
    for (let i = 0; i < firstArr.length; i++) {
        for (let j = 0; j < secondArr.length; j++) {
                obj[firstArr[i]] = secondArr[i];   
        }  
    }
    console.log(obj);
}
getObject(['name', 'FIO', 'age'], ['Alex', 'Soprano', '28']);


//Task 5 

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function delArr(arr, count) {
    let newArr = [];
    let smallArr = [];
   for(let i = 0; i < count; i++){
       smallArr = arr.slice(i*count, i*count + count);
       newArr.push(smallArr);
       console.log(smallArr);
   }
    console.log(newArr)
}   
delArr(arr, 3);
