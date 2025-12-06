//Problem: Separate variables for related data
let userName: string = "John Doe";
let userAge: number = 30;
let userEmail: string = "john@example.com";
let userIsActive: boolean = true;
//Imagine managing this for 100 users...

//Solution: Object literal
let user: any = {
    name: "John Doe",
    age: 30,
    email: "john@example.com",
    isActive: true
};

//Accessing object
console.log(user);

//Accessing properties
console.log(user.name); //"John Doe"
console.log(user.age); //30
console.log(user.isActive); //true

//Problem: No type safety
let product = {
    title: "Laptop",
    price: "hello",
    isStock: true
}; //Can accidentally add wrong properties or misspelli

//Solution: Type annotation
let typedUser: {
    name: string,
    age: number,
    isActive: boolean
} = {
    name: "Jane Smith",
    age: 25,
    isActive: false,
    //city: "Hyderabad"
};
console.log(typedUser);


//Optional properties
let employee: {
    name: string,
    age: number,
    email?: string //optional
} = {
    name: "Alice",
    age: 28,
    //email: "sample@example.com"
    //email is optional, so this is valid
};


//Nested objects
let userWithAddress: {
    name: string,
    age: number,
    address: {
        street: string,
        city: string,
        zipCode: number
    }
} = {
    name: "Mike",
    age: 32,
    address: {
        street: "123 Main St",
        city: "New York",
        zipCode: 10001
    }
};

//Accessing nested properties
console.log(userWithAddress.address.city);
console.log(userWithAddress);
