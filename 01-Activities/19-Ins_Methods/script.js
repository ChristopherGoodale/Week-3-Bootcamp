let person = {
    firstName: 'David',
    lastName: 'Blaine',
    getFirstName() {
        return this.firstName;
    },
};

console.log(person.getFirstName());
console.log(person.firstName)

let comparisonOperators = ["Equal", "Not Equal", "Strict Equal", "Strict Not Equal", "Greater Than", "Less Than"];
let arithmaticOperators = ["+", "-", "%"];
let logicalOperators = ["and", "or", "not"];
let myString = "Hello String";

//Array Methods
// Sorts comparisonOperators array and returns the sorted array
comparisonOperators.sort();

//Logs sorted array
console.log(comparisonOperators);

// Adds elements to end of an array. Takes in at least one parameter
arithmaticOperators.push("%");

//Logs array with element "%" added to end
console.log(arithmaticOperators);

//Returns selected elements as a new array.
let logicalOperatorsSliced = logicalOperators.slice(0, 2);

//Logs new array
console.log(logicalOperatorsSliced);

// The orginal array is unchanged
console.log(logicalOperators);

//String Methods
//Replaces "String" with "World" and returns new string
let myNewString = myString.replace("String", "World");
console.log(myNewString);

//The orginal string is unchanged
console.log(myString);
