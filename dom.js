// console.log("hi there");
// console.dir(document);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);
// const header = document.getElementById('header-title');
// header.textContent="byr";
// const header = document.getElementById('main-header');

// header.style.borderBottom ="2px solid black";

// const list = document.getElementsByClassName("list-group-item");
// list[0].style.backgroundColor = "grey";

// let add = document.getElementsByClassName("title");
// add[0].style.color ="green";
// add[0].style.fontWeight="bold"
// for(let a of add){
//     a.style.backgroundColor ="grey";
// }

let list =document.getElementsByClassName("list-group-item");
list[2].style.backgroundColor = "green";

for(let li of list){
    li.style.fontWeight ="bold";
}