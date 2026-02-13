//Problem: Function with fixed parameters
function addTwoNumbers(a: number, b: number): number
{
    return a + b;
}

//Solution: Rest parameters
function calculateTotal(...prices: number[]) : number
{
    return prices.reduce((total, price) => total + price, 0);
}

//Using with any number of arguments
let total1 = calculateTotal(100, 20);
let total2 = calculateTotal(50, 75, 100);
let total3 = calculateTotal(10, 20, 30, 45, 100);
console.log(total1, total2, total3);

//Spread operator - expanding arrays
let numbers = [10, 5, 20, 15];
let max = Math.max(...numbers);
console.log(max);

//Copying arrays with spread
let originalPrices = [100, 200, 300];
//let copiedPrices = originalPrices; //This doesn't create a copy!
let copiedPrices = [...originalPrices];
copiedPrices.push(400);
console.log("Original: ", originalPrices);
console.log("Copied: ", copiedPrices);

//Spread with objects
let user = { name: 'John', age: 30 };
let updatedUser = { ...user, email: "james@example.com", name: "James" };
console.log(updatedUser);
