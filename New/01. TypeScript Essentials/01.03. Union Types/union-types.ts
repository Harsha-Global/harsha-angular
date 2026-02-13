//Problem
let response1: number = 200; //Can't store "success"
console.log(response1);
let response2: string = "success"; //Can't store 200
console.log(response2);

//Solution: union types
let response: string | number;
response = 200; //valid
console.log(response);
response = "success"; //valid
console.log(response);
//response = true; //Error

//Common use case: nullable values
let userInput: string | null;
userInput = "John"; //valid
console.log(userInput);
userInput = null;
console.log(userInput); //vaid
