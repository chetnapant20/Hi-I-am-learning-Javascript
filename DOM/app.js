// SELECT ELEMENT

let result = document.querySelector('.result') ;
//1st class that matches
let heading = document.querySelectorAll('#heading') ;
//all that matches here its id

// OR
let result1 = document.getElementsByClassName('result'); //bye class, returns html collection
let result2 = document.getElementsByTagName('result'); //by tag bye class, returns html collection
let heading2 = document.getElementById('heading');
//by id bye class, returns html collection
// -------------------------------------------------

console.log(result); //gives the element
console.dir(result); //gives the elemnt + method and properties
// --------------------------------------------------







