// 1
var myFirstName = 'Andrei'
var myLastName = 'Davidovich'

// 2
// Only change code below this line
var a = 5;
var b = 10;
var c = 'I am a';
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

// 3
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// 4
let catName = "Oliver";
let catSound = "Meow!";

// 5 
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

// 6 
// Only change code below this line
const myName = "Andrei";
const myStr = "My name is "+ myName + " I am well";

// 7
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

// 8
// Setup
let firstLetterOfLastName = "";
// const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

// 9 
// Setup
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3])
// Only change code below this line

// 10
// Setup
// const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();
// Only change code below this line

// 11 
// Setup
// const myArray = [["John", 23], ["dog", 3]];
// const removedFromMyArray = myArray.shift()
// Only change code below this line

// 12
// Setup
// const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35])
// Only change code below this line

// 13
function reusableFunction() {
	console.log("Hi World");
 }
 reusableFunction();

 // 14
 function functionWithArgs(a,b) {
	console.log(a+b)
 }
 functionWithArgs(2,3)