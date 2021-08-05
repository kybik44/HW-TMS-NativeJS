let data = [
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
let $modal = document.querySelector(".modal");
let $btnOk = document.querySelector(".ok");
let $inputs = document.querySelectorAll("input");
let $table = document.querySelector(".table");

let btns = document.querySelectorAll("btn");
document.addEventListener("click", function(event){
    const target = event.target;
    if(target.classList.contains('modal')) toggleClass('close');
    if(target.classList.contains('close')) toggleClass('close');
    if(validate().itEmpty()){
        if(target.classList.contains('ok')) toggleClass('close');
    }else{
        if(target.classList.contains('ok')) toggleClass('open');
    }
    if(target.classList.contains('add-user')) toggleClass('open');
    
});
$btnOk.addEventListener("click", function(){
   
    if(validate().itEmpty()){
        addNewUser();
        fillTable();
    
    }
});
function toggleClass (evt) {
    if(evt === "open") $modal.classList.add("active");    
    if(evt === "close") {
        $modal.classList.remove("active") ;
        validate().clearForm();
    }
}
function validate(){
    function clearForm(){
        for(let inpt of $inputs){
            inpt.value = '';
        }
    }
    function itEmpty(){
        let inptValue;
        for(let inpt of $inputs){
            inptValue = inpt.value;
            inptValue.trim();
            if(inptValue === ""){
                inpt.placeholder = 'Заполните это поле'
                inpt.style.borderColor = "red";
                return false;
            }else{
                inpt.style.borderColor = "";
                inpt.placeholder = '';
            }
        }
        return true;
    }
    return { clearForm, itEmpty }
}

 
function addNewUser(){
    let fName = document.querySelector("input[name=first-name]");
    let lName = document.querySelector("input[name=last-name]");
    let age = document.querySelector("input[name=age]");
    let newUser = {
        firstName: fName.value,
        lastName: lName.value,
        age: age.value,

    }
    data.push(newUser);
    
    return newUser;
}
function fillTable() {
    $table.innerHTML = '';
    for(let user of data){
        $table.innerHTML += `<tr>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.age}</td>
        </tr>`
    }
}

// let $btnsClose = document.querySelectorAll(".close");
// let $btnAdd = document.querySelector(".add-user");
// let $popup = document.querySelector(".popap");
// $btnAdd.addEventListener("click", function(){
//     $modal.style.display = "block";
// });

// for(let btn of $btnsClose){
//     btn.addEventListener("click", function(){
//         $modal.style.display = "none";
//         for(let inpt of $inputs){
//             inpt.value = "";
//         }
//     });
// }
// $modal.addEventListener("click", function(event){
//     let target = event.target;
//     if(target.classList.contains("modal")){
//         $modal.style.display = "none";
//     }
// });