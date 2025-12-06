//var
var oldWay = "Don't use var";
var count = 10;

//let
let reassignable = "Can change this";
reassignable = "Changed value"; //This is allowed

//const
const constant = "Cannot change this";
//constant = "Error!";

//number
const productPrice: number = 200.99;
const downloadCount: number = 1000;
const rating: number = 4.5;
const temperature: number = -10;

//string
const apiEndpoint: string = "https://api.example.com/data";
const authToken: string = 'Bearer xyz123';
const welcomeMessage: string = `Welcome to our platform`;
const companyName: string = "TechCorp";

//boolean
const isAuthenticated: boolean = true;
const hasSubscription: boolean = false;
const isLoading: boolean = true;
const isEmailVerified: boolean = false;

//any
let responseData: any = { "name": "Harsha", "age": 30 };
//console.log(responseData.toUpperCase()); //compiles, crashes at runtime

//unknown
const a: unknown = { name: "Harsha", "age": 30 }
//console.log(a.name); //not allowed
if (typeof a === 'object' && a != null && "name" in a)
{
 console.log(a.name);
}

//null and undefined
let profilePicture: null = null;
let notAssigned: undefined = undefined;

//type inference
let inferredNumber = 42;
//inferredNumber = "Hello";
