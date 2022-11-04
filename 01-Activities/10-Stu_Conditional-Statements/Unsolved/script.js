// Change the values and operators below to test your algorithm meets all conditions
let x = 50;
let expression1 = (x > 25); //false
let expression2 = (x >= 50); //false

// Write Your JavaScript Code Here
if (expression1 && expression2) {
    console.log('true true');
} else if (expression1 === true) {
    console.log('true false');
} else if (expression2 === true) {
    console.log('false true');
} else {
    console.log('false false');
}