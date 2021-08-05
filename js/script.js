
//Task1


let array = ["String", 12, 34, 56, 123, 68, 7, 5];
let sum = 0;
for(let znach of array){
    if(typeof(znach) == Number){
        sum += znach;
        
    }else{
        console.log("Вы ввели не число");
        break;
    }
   
}
console.log(sum);


//Task2


let users =  [
    {name: 'Ivan', age: 18}, 
    {name: 'Petr', age: 12}, 
    {name: 'Sidor', age: 25},
    {name: 'Pavel', age: 29},
    {name: 'Katya', age: 33},
    {name: 'Egot', age: 39},
];
let children = [];
let old = [];

for(i = 0; i < users.length; i++){
    if(users[i].age >= 18){
        old.push(users[i]);
    }else{
        children.push(users[i]);
    }

}
console.log(old);
console.log(children);

//Task3


let disk = 0;
let a = 0;
let b = 0;
let c = 0;
let x1 = 0;
let x2 = 0;
let x = 0;
function considerDiscriminant(a, b ,c){
 
    disk = b**2 - 4 *a*c;
    if(disk > 0){
        x1 = (-b + Math.sqrt(disk))/(2*a);
        x2 = (-b - Math.sqrt(disk))/(2*a);
        console.log(x1, x2);
        return x1, x2;
        
    }else if(disk = 0){
        x = -b/(2*a);
        console.log(x);
        return x;
    }else{
        console.log("Дискриминант отрицательный")
    }
    
};
considerDiscriminant(2, 9, 6);


function divisors(integer) {
    let del;
    let arr = [];
    for(let i = 1; i < integer; i++){
      let rez = integer % i;
      if(rez === 0){
        arr.push(i);
        

      }
      
    }
    console.log(arr);
  };
  divisors(15);

  let a = 10;
  let b = 3;
  console.log(a%b);


//Task 4(Presentation)


var data = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40
    }, {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54
    }, {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24
    }
 ];
 

let window = prompt("Введите строку");
let findedUser = null;
for(let znach of data){
    if(znach.lastName === window){
        findedUser = znach;
    }
}
 if(findedUser !== null){
    console.log(findedUser.firstName + findedUser.lastName + findedUser.age);
 }else{ 
    alert("No result found for you request");
}

