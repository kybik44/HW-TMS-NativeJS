//Task 1

let mass = [1, 2, 3, 4, 5, 7, 8, 9];
let resMass = [];
function getNumber (mass){
   for(let i = 0; i < mass.length; i++){
       
   }
}
getNumber(mass);
console.log(getNumber(mass));


//Task 2 Abbreviation


function makeAbbr (...str){
    let numString = str.length;
    let mass = [];
    let resStr;
    for(let i = 0; i < numString; i++){
     for(let j = 0; j < str[i].length; j++){
        if((str[i][j] === str[i][j].toUpperCase()) && (str[i][j] !== " ")){
            mass.push(str[i][j]); 
            resStr = mass.join(".");
        }    
        }
    }
    console.log(resStr)
    return resStr;
}

makeAbbr("Asda Badasd Fg", "Sadafad");

//Task 3

function checkBrack(str) {
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if((str[i] === "(")  || str[i] === ")"){
            count++;
        }
    }
    if(count % 2 === 0){
        return true;
    }else{
        return false;
    }
   
}
checkBrack("(2 + 2) * 2");


//Task 4

function unique(arr) {
    let result = [];
  
    for (let num of arr) {
      if (!result.includes(num)) {
        result.push(num);
      }
    }
    return result;
  }
