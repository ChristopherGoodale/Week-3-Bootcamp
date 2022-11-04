// A letiable declared in global scope is available to all functions
let hello = "Hello";

function sayHello() {
  let function1scope = 'im in backyard 1';
  console.log(function1scope);
  console.log(hello);
  return;
}


let sayHelloAgain = function () {
  console.log(hello);
  return;
};

sayHello();
sayHelloAgain();

//A letiable declared in local scope is only available to that function
function sayGoodbye() {
  let goodbye = "Goodbye";
  console.log(goodbye);
  return;
}

//This will throw an error
let sayGoodbyeAgain = function () {
  console.log(goodbye);
  return;
};

// Shadowing happens when the same letiable is used in the local and global scope
let shadow = "Hello";
console.log(shadow);

// Logs "Hello"
function sayWhat() {
  console.log(shadow);
  return;
}

//Logs "Goodbye"
let sayWhatAgain = function () {
  let shadow = "Goodbye";
  console.log(shadow);
};
console.log(shadow);
console.log(shadow);
console.log(shadow);
console.log(shadow);
console.log(shadow);
console.log(shadow);

sayWhat();
sayWhatAgain();
