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

//Task 4: Map Method

//Declare an array
const prices = [100,200,300];

//Use the .map() method to apply a 10% discount to each price
const discount = prices.map(price => price * 0.9);

//Log the new discounted prices to the console
console.log("Discounted Prices: ", discount);

//Task 5: Filter Method

//Declare an array inventory with at least five product quantities
let inventory = [5, 0, 12, 8, 0];

//Use the .filter() method to remove products with zero stock
let usableInventory = inventory.filter(quantity => quantity > 0);

//Log the filtered array to the console
console.log("Inventory: ", usableInventory);

//Task 6: Reduce Method

//Declare an array
let sales = [500, 300, 200, 400];

//Use the .reduce() method to calculate total revenue
let totalRevenue = sales.reduce((total, sales) => total + sales, 0);

//Log the total revenue to the console
console.log(`Total Revenue: $${totalRevenue}`);

//Task 7: find() Method

//Declare an array
let customers = ["Alice", "Bob", "Charlie", "David"];

//Use the .find() method to locate the customer "Charlie"
let findCustomer = customers.find(customer => customer == "Charlie");

//Log the result to the console
console.log("Customers: ", customers);
console.log("Find Customer: ", findCustomer);

//Task 8: Function Declaration

//Write a function calculateTax(amount, taxRate)
function calculateTax(amount, taxRate) {
    const tax = amount * taxRate;
//Return the calculated tax and log it using a template literal
    console.log(`Calculated Tax: $${tax.toFixed(2)}`);
    return tax;
};

calculateTax(500, 0.05);

//Task 9: Function Expression

//Declare a function expression
let applyDiscount = function(price, discount) {
    const discountPrice = price - (price * discount);
    const finalPrice = price - discountPrice
//Return the discounted price and log the result
    console.log(`Original price: $${price.toFixed(2)}`);
    console.log(`Discount applied: ${discount}%`);
    console.log(`Final price: $${finalPrice.toFixed(2)}`);
    return finalPrice;
};

applyDiscount(250, 0.3);

//Task 10: Arrow Function

//Write an arrow function
let calculatePoints = (purchaseAmount) => {
//Return 1 point per $10 spent and log the result
    const points = Math.floor(purchaseAmount / 10);
    console.log(`Purchase Amount: $${purchaseAmount}`)
    console.log(`Points: ${points}`)
    return points;
};

calculatePoints(120);

