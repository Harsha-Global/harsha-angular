//Creating a basic class
class Product
{
    private id: number; //Should never change after creation
    public name: string;
    public price: number;
    public quantity: number;

    constructor(name: string, price: number, quantity: number = 0)
    {
        this.id = Date.now(); //Set once duration creation
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    //Public method to read the private id
    public getId(): number
    {
        return this.id;
    }

    public displayInfo(): void
    {
        console.log(`${this.name} costs ${this.price} and we have ${this.quantity} in stock`);
    }
}

//Creating an instance (object) from the class
let laptop = new Product("Gaming Laptop", 1500, 10);
laptop.name = "Pro Gaming Laptop";
//laptop.id = 10; //Error: Property 'id' is private

//Must use public method to read id
console.log(laptop.getId());

//Calling the method
laptop.displayInfo();


//Creating another instance
let mouse = new Product("Wireless Mouse", 25);
mouse.displayInfo();
