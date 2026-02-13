//Problem: Repeating calculation logic
let laptop = 1500;
let laptopDiscount = laptop * 0.1;
let laptopFinal = laptop - laptopDiscount;

let phone = 800;
let phoneDiscount = phone * 0.15;
let phoneFinal = phone - phoneDiscount;

//Solution: Reusable function
function calculateDiscount(price: number, discountPercent: number) : number
{
    const discountAmount = price * (discountPercent / 100);
    const finalPrice = price - discountAmount;
    return finalPrice;
};

//Using the function
let laptopPrice = calculateDiscount(1500, 10);
let phonePrice = calculateDiscount(800, 15);
let iPadPrice = calculateDiscount(1100, 20);

console.log(laptopPrice, phonePrice, iPadPrice);

//Optional parameters (problematic)
function greetUser(name: string, age?: number): string
{
    return `Hello ${name}, you are ${age} years old`;
    //Problem: age might be undefined
}

console.log(greetUser("Scott")); //age will be undefined

//Default parameters (better)
function calculateTax(amount: number, taxRate: number = 18): number
{
    return amount + (amount * taxRate / 100);
}

let withDefaultTax = calculateTax(1000); //Uses 18% default
let withCustomTax = calculateDiscount(1000, 12); //Uses 12%
console.log(withDefaultTax);
console.log(withCustomTax);

//Arrow functions
const multiply = (a: number, b: number): number => 
{
    return a * b;
};
console.log(multiply(10, 2));
