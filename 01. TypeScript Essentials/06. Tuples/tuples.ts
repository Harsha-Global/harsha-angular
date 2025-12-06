//Problem with regular arrays
let locationArray: number[] = [28.6139, 77.2090];
locationArray.push(100); //Can add more elements - no restriction

//Creating a tuple
let coordinates: [number, number] = [28.6139, 77.2090];

//Trying to create with one value - ERROR
//let coords1: [number, number] = [28.6139]; //Error: must have 2 elements

//Trying to create with three values - ERROR
//let coords2: [number, number] = [28.6139, 77.2090, 100]; //Error: too many

//Tuple with different types
let httpResponse: [number, string] = [200, "Success"];

//Wrong type in second position - ERROR
//let response2: [number, string] = [200, 404]; //Error: second must be string

//Accessing tuple elements
let statusCode: number = httpResponse[0]; //Gets 200
let message: string = httpResponse[1]; //Gets "Success"

//Destructuring tuples
let [code, msg] = httpResponse; //code is 200; msg is "Success"

//Printing
console.log(locationArray);
console.log(coordinates);
console.log(httpResponse);
console.log(statusCode);
console.log(message);
console.log(code);
console.log(msg);
