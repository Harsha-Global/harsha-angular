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

//Child class that extends Product class (Inheritance)
class ElectronicProduct extends Product
{
    public warranty: number; //Additional property

    constructor(name: string, price: number, warranty: number)
    {
        super(name, price);
        this.warranty = warranty;
    }
}


//Creating an instance (object) from the class
let laptop = new ElectronicProduct("Gaming Laptop", 1500, 10);

//Must use public method to read id
console.log(laptop.getId());

//Calling the method
laptop.displayInfo();


//Creating another instance
let mouse = new Product("Wireless Mouse", 25);
mouse.displayInfo();
