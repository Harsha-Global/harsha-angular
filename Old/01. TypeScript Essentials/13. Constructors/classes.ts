//Creating a basic class
class Product
{
    name: string = "";
    price: number = 0;
    quantity: number = 0;

    constructor(name: string, price: number, quantity: number = 0)
    {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    displayInfo(): void
    {
        console.log(`${this.name} costs ${this.price} and we have ${this.quantity} in stock`);
    }
}

//Creating an instance (object) from the class
let laptop = new Product("Gaming Laptop", 1500, 10);

//Calling the method
laptop.displayInfo();


//Creating another instance
let mouse = new Product("Wireless Mouse", 25);
mouse.displayInfo();
