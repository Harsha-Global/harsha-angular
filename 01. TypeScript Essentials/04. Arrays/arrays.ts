//Problem: Multiple separate variables
let price1: number = 99.99;
let price2: number = 149.99;
let price3: number = 199.99;
//Imagine having 100 products...

//Solution: using arrays
//Method 1: Square bracket syntax
let productPrices: number[] = [99.99, 149.99, 199.99];

//Method 2: Array generic syntax
let discountPrices: Array<number> = [89.99, 139.99, 189.99];
console.log(productPrices);
console.log(discountPrices);

//Adding items
productPrices.push(299.99);
productPrices.push(399.99);
console.log(productPrices);

//Accessing items by index
let firstPrice = productPrices[0];
let secondPrice = productPrices[1];
console.log(firstPrice);
console.log(secondPrice);

//Getting array length
let totalProducts = productPrices.length;
console.log(`We have ${totalProducts} products`);

//String arrays
let emailList: string[] = [
    "user1@example.com",
    "user2@example.com",
    "user3@example.com"
];

//Adding to string array
emailList.push("user4@example.com");
console.log(emailList);


//Type safety
let quantities: number[] = [10, 20, 30];
quantities.push(40); //valid
//quantities.push("fifty"); //Error! Must be number

