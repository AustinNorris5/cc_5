//Task 1: Object Properties

//Declare an object customer with the properties
let customer = {
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"
};
//Log each property using console.log() and a template literal
console.log(`Name: ${customer.name}`);
console.log(`Age: ${customer.age}`);
console.log(`Email: ${customer.email}`);

//Task 2: Object Methods

//Declare an object order with properties
let order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",
//Add a method displayOrder() inside the object to log the order details using this
displayOrder() {
    console.log(`Order ID: ${this.orderId}`);
    console.log(`Total Amount: ${this.totalAmount}`);
    console.log(`Status: ${this.status}`);
}
};

//Call the metod and log the details
order.displayOrder();

//Task 3: Array Manipulation (push, pop, shift, unshift)

//Declare an array cartItems with three product names
let cartItems = ["Pensil", "Paper", "Folder"];

//Add a new product to the cart using .push()
cartItems.push("Binder");

//Remove the last item using .pop()
cartItems.pop();

//Add an item at the beginning using .unshift()
cartItems.unshift("Highliter");

//Remove the first item using .shift()
cartItems.shift();

//Log the final array to the console
console.log(cartItems);



