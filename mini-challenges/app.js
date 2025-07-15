// Challenge 1
let firstName ="Chetna",lastname="pant",address='main street';
address="first street";
console.log(firstName, lastname, address);

// // Challenge 2
let street,country;
street= "dhungsil"
country="india"
let fullMailingAddress="street" + " " + "country"
console.log(fullMailingAddress);

// // Challenge 3
let score1, score2, score3;
score1 = 48;
score2 = 35;
score3 = 34;
let total,average;
total = score1 + score2 + score3;
average = total/3;
console.log("total score is : ", total);
console.log("average score is : ", average);
let plates = 20, people = 7;
let remaining_plates = plates % people;
remaining_plates += 1;
console.log("There are " + remaining_plates +" plates available");

// implicit type conversion
// concatenation instead of addition
console.log(10+23);//addition
console.log('10'+23);//string
console.log(10+'23');//string

console.log('a'-'b');//nan
// console.log(a-'b');//undefined as a is undeclared variable and not treated as string

// all substraction and same goes for *,/,%
console.log(10-23);
console.log('10'-23);
console.log(10-'23');

// here there is first maths solve and then concatenation
console.log("10" - 5 + '6');
console.log("10"+5*6);

// Challenge 4
let fruits=["apple" , "banana" , "kiwi", "strawberry",90];
let first_fruit=fruits[0];
fruits[4]="papaya";
console.log("first fruit variable: ", first_fruit);
console.log("array elements are:",fruits);

// Challenge 5
function calculateTotal(subTotal,tax){
  return subTotal + tax;
}
console.log(calculateTotal(5,9));

// Challenge 6
let car = {
  make: "tata",
  model: 4467,
  year: 2025,
  colors: ["white", "grey"],
  hybrid: false,
  drive:function () {
    console.log("this is drive method");
  },
  stop() {
    console.log("this is stop method");
  },
}
  console.log("random text");
  console.log(car.make);
  console.log(car.colors[0]);
  car.drive();
  car.stop();

  // Challenge 7
  let person1 = {
    name: "Chetna",
    age:24,
    status:"tourist",
  }
  let person2 = {
    name: "John",
    age: 34,
    status: "resident",
  }

  if(person1.age>=18 && person1.status==="resident"){
    console.log("person1 is allowed");
  }
  else{
    console.log("person1 is not allowed");
  }
  if(person2.age>=18 && person2.status==="resident"){
    console.log("person2 is allowed");
  }
  else{
    console.log("person2 is not allowed");
  }