//Sample data
const productPrices: number[] = [49.99, 99.99, 13.99, 149.99, 199.99, 299.99];

//MAP - Transform each element
//Apply 10% discount to all prices
const discountedPrices = productPrices.map(price => price * 0.9);
console.log(discountedPrices); //[44.99, 89.99, 134.99, 179.99, 269.99]

//FILTER - Get items that match the condition
//Get all premium products (which price > 100)
const premiumProducts = productPrices.filter(price => price > 100);
console.log(premiumProducts); //[149.99, 199.99, 299.99]

//FIND - Get first matching item
//Find first premium product
const firstPremium = productPrices.find(price => price > 100);
console.log(firstPremium); //149.99

//REDUCE - Accumulate to single value
//Calculate total price
const totalPrice = productPrices.reduce((total, price) => {
    return total + price
},
0);
console.log(totalPrice); //799.95

//FOREACH - Execute a function for each item (no return)
productPrices.forEach(price => {
    console.log(`Processing payment for $${price}`);
});

//SOME - Check if at least one item matches
const hasAffordableItem = productPrices.some(price => price < 50);
console.log(hasAffordableItem); //true

//EVERY - Check if all items match
const isAllPremium = productPrices.every(price => price > 100);
console.log(isAllPremium); //false

//INCLUDES - Check if array contains value
const hasSpecificPrice = productPrices.includes(99.99);
console.log(hasSpecificPrice); //true

//INDEXOF - Find position of item
const position = productPrices.indexOf(149.99);
console.log(position); //2

//SORT - Arrange items in order
const sortedPrices = productPrices.sort((a, b) => a - b);
console.log(sortedPrices);
