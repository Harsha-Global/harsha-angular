//Problem: Repeating type definitions
let product1: {
    name: string,
    price: number,
    category: string,
    isStock: boolean
} = {
    name: "Laptop",
    price: 1500,
    category: "Electronics",
    isStock: true
};

let product2: {
    name: string,
    price: number,
    category: string,
    isStock: boolean
} = {
    name: "Mouse",
    price: 25,
    category: "Electronics",
    isStock: false
};

//Solution: Type Alias
type Product = {
    name: string,
    price: number,
    category: string,
    inStock: boolean
};

//Now we can reuse the type
let laptop: Product = {
    name: "Laptop",
    price: 1500,
    category: "Electronics",
    inStock: true
};

let mouse: Product = {
    name: "Mouse",
    price: 25,
    category: "Electronics",
    inStock: false
};

//Array of objects
let products: Product[] = [
    { name: "Laptop", price: 1800, category: "Electronics", inStock: true },
    { name: "Mouse", price: 25, category: "Electronics", inStock: false },
    { name: "Keyboard", price: 75, category: "Electronics", inStock: true },
    { name: "Monitor", price: 300, category: "Electronics", inStock: false },
    { name: "Headphones", price: 100, category: "Audio", inStock: true }
];
console.log(products);

//Filter products in stock
let availableProducts = products.filter(product => product.inStock);
console.log(availableProducts);

//Sort products by price (low to high) - ascending
let sortedByPrice = products.sort((a, b) => a.price - b.price);
console.log(sortedByPrice);

//Combine filter and sort
let affordableInStock = products
    .filter(product => product.price < 1000)
    .sort((a, b) => a.price - b.price);
console.log(affordableInStock);

//Type aliases for other types
type UserId = string | number;
let UserIdValue: UserId = "user"; //valid
UserIdValue = 123; //also valid

type Status = "pending" | "approved" | "rejected";
let orderStatus: Status = "pending"; //valid
orderStatus = "approved"; //also valid
//orderStatus = "other"; //invalid
