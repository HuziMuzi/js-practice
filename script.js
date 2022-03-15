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


 // 15
 function timesFive(num){
	return num * 5
 }

 // 16 

 // Declare the myGlobal variable below this line
const myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// 17

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum += 5
}

// Only change code above this line

addThree();
addFive();

// 18
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7)
// Only change code below this line

// 19 
function nextInLine(arr, item) {
	// Only change code below this line
	arr.push(item)
	let remove = arr.shift()
	return remove;
	// Only change code above this line
 }
 
 // Setup
 const testArr = [1, 2, 3, 4, 5];


 // 20

 // Setup
function testStrict(val) {
	if (val === 7) { // Change this line
	  return "Equal";
	}
	return "Not Equal";
 }
 
 testStrict(10);

 // 21
 // Setup
function compareEquality(a, b) {
	if (a === b) { // Change this line
	  return "Equal";
	}
	return "Not Equal";
 }
 
 compareEquality(10, "10");

 // 22
 // Setup
function testNotEqual(val) {
	if (val != 99) { // Change this line
	  return "Not Equal";
	}
	return "Equal";
 }
 
 testNotEqual(10);


 // 23
 function testElse(val) {
	let result = "";
	// Only change code below this line
 
	if (val > 5) {
	  result = "Bigger than 5";
	} else {
	  result = "5 or Smaller";
	}
	// Only change code above this line
	return result;
 }
 
 testElse(4);

 // 24
 function testElseIf(val) {
	if (val > 10) {
	  return "Greater than 10";
	} else if (val < 5) {
	  return "Smaller than 5";
	} else {
	  return "Between 5 and 10";
	}
 }
 
 testElseIf(7);

// 25
function orderMyLogic(val) {
	if (val < 5) {
	  return "Less than 5";
	} else if (val < 10) {
	  return "Less than 10";
	} else {
	  return "Greater than or equal to 10";
	}
 }
 
 orderMyLogic(7);
 // 26
 function testSize(num) {
	// Only change code below this line
	if (num < 5){
	  return "Tiny"
	} else if (num < 10) {
	  return "Small"
	} else if (num < 15) {
	  return "Medium"
	} else if (num < 20){
	  return "Large"
	} else if (num >= 20) {
	  return "Huge"
	}
 
	return "Change Me";
	// Only change code above this line
 }
 
 testSize(7);
 //27

 const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if(strokes  == 1) {
    return "Hole-in-one!"
  } else if (strokes <= par - 2) {
    return "Eagle"
  } else if (strokes ==  par - 1){
    return "Birdie"
  } else if (strokes == par) {
    return "Par"
  } else if (strokes == par + 1){
    return "Bogey"
  } else if (strokes == par + 2){
    return "Double Bogey"
  } else if (strokes >= par + 3) {
    return "Go Home!"
  } else {
  return "Change Me";
  }

  // Only change code above this line
}

golfScore(5, 4);

// 28

function caseInSwitch(val) {
	let answer = "";
	// Only change code below this line
	switch(val) {
	  case 1:
		 answer = "alpha";
		 break;
	  case 2:
		 answer = "beta";
		 break;
	  case 3:
		 answer = "gamma";
		 break;
	  case 4:
		 answer = "delta"
	}
 
 
	// Only change code above this line
	return answer;
 }
 
 caseInSwitch(1);

 // 29