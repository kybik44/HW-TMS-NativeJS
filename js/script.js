//Task 1

function setdelay(delay, modal){
    setTimeout(()=>{
        random = Math.random(1, 10);
        modal(delay)
    }, delay)
}
function alertGo(delay){
    alert("Прошло " + delay + "случайное число" + random)
}
setdelay(1000, alertGo)


// Task 2 
const hourses = [ "Каштан", "Молния", "Олег"]

let i = 0
function runHourse(name, finishTime){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res({name, finishTime})
        }, finishTime)
    });

}
hourses.forEach((item)=>{
    runHourse(item, getRandomTime(5)).then((data)=>{
        console.log(data.name + " финишировал за " + data.finishTime + " милисекунд");
       })
})

function getRandomTime(max) {
    return Math.floor(Math.random() * max * 1000);
  }
  
 



