//Without array destructuring
let userInfo = ["John", 30, "New York"];
let userName = userInfo[0]; //"John"
let userAge = userInfo[1]; //30
let userCity = userInfo[2]; //"New York"

//With array destructuring
let [personName, age, city] = ["John", 30, "New York"];
console.log(personName, age, city);

//Skipping elements
let [firstName, , userLocation] = ["Alice", 25, "London"];
console.log(firstName, userLocation);

//Using rest operator
let [first, ...rest] = ["apple", "banana", "orange", "mango"];
console.log(first);
console.log(rest);

//Object destructuring

//Without destructuring
let product = { title: "Laptop", price: 999, inStock: true };
let productTitle = product.title;
let productPrice = product.price;
let productStock = product.inStock;
console.log(productTitle, productPrice, productStock);

//With object destructuring
let { title, price, inStock } = { title: "Laptop", price: 999, inStock: true };
console.log(title, price, inStock);

//Renaming variables
let { title: productName, price: cost } = product;
console.log(productName, cost);

//Function returning object
function getUserData()
{
    return { id: 1, username: "john_doe", email: "john@example.com" };
}
let { id, username, email } = getUserData();
console.log(id, username, email);

//Destructuring in function parameters
function greetUser({name, age}: {name: string, age: number})
{
    console.log(`Hello ${name}, you are ${age} years old`);
}
greetUser({ name: "Bob", age: 35});

//Default values
let { category, discount = 0} = { category: "Electronics" };
console.log(category, discount);

//Nested destructuring
let user = {
    name: "Sarah",
    address: {
        street: "123 Main st",
        city: "Boston"
    }
};

let { name: userName2, address: { street, city: userCity2 }} = user;
console.log(userName2, street, userCity2);
