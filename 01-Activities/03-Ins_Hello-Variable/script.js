// Declares student variable using var keyword 
let country; //undefined
// Uses assignment operator(=) to assign a value
let studentName = 'Abdul'; //string=
let studentAge = 32;// number
let canDrink = false; //boolean

let address = '1 north main';

// To re-assign a variable, use only the variable's name  
studentName = 'guchungus';
studentAge = 52;

let newStudentAge = 40;
console.log(studentAge + newStudentAge)

// To access a value stored in a variable, use the variable's name
console.log(studentName);

//To combine the message with a variable value use the concatenation operator(+)
//Logs "My name is "
console.log("My name is ");

// Logs "My name is Tonya"
console.log(`My name is ${studentName} and my age is ${studentAge}`);
