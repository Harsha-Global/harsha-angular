//Creating a basic class
class Product
{
    name: string = "";
    price: number = 0;
    quantity: number = 0;

    displayInfo(): void
    {
        console.log(`${this.name} costs ${this.price} and we have ${this.quantity} in stock`);
    }
}

//Creating an instance (object) from the class
let laptop = new Product();

//Setting properties
laptop.name = "Gaming Laptop";
laptop.price = 1500;
laptop.quantity = 10;

//Calling the method
laptop.displayInfo();


//Creating another instance
let mouse = new Product();
mouse.name = "Wireless Mouse";
mouse.price = 25;
mouse.quantity = 50;

mouse.displayInfo();
