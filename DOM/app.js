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


// STYLE the selected elemet
// element.style.property="value";
heading[0].style.color = 'red';
// query selector returns nodelist and you have to access it as array

result.style.color = 'blue';
// it query selector returns only one element
// all get by return html collection
// --------------------------------------------------

// CHILDREN
const child = result.childNodes;
// includes whitespaces as child as well, returns nodelist
console.log(child);
// or
const child2 =result.children;
console.log(child2);
// return html collection, but only childern are shown over here

// access firt child
const first = result.firstChild;
console.log(first);
// it will be text (whitespace) as it considers whitespaces as well
// OR
const first1 = result.firstChildren;
console.log(first1);

// access last chiild
const last = result.lastChild;
// it will be text (whitespace) as it considers whitespaces as well

//  Parents acess
const parent = heading[0].parentElement;
console.log(parent);
// immediate parent get accessed

// SIBLINGS
// next sibling
const second = first.nextSibling;
console.log(second);
// it gets whitespace on one use
// or
const second1 = first.nextElementSibling;
console.log(second1);
// it doesnt conisder whitespac as sibling

// prev sibling
const prev = second.previousSibling;
console.log(prev);
// it gets whitespace on one use
// or
const prev1 = second.previousElementSibling;
console.log(prev1);
// it doesnt conisder whitespac as sibling
// null if no sibling there





