////////////////////////////////////////////////////////////////////////////////////////

//Restaurant Object. Contains an array of the current order and a function for
//creating new orders using templates.
let newOrder
const restaurant = {
    name: "Bob's Burgers",
    order: [],
    //creates a new order with Object.create(meal), accepts fries and drink values
    //to alter those properties to the specifications of the customer.
    placeOrder: function (meal, fries, drink) {
        newOrder = new comboMeal(meal, fries, drink);
        this.order.push(newOrder);
    },
}

//order object constructor
class comboMeal {
    constructor(meal, fries, drink) {
        this.mealType = meal;
        this.fries = fries;
        this.drinksize = drink;
    }
}



// Place an order
restaurant.placeOrder("chickenSandwich", "curly", "small");

// Invoke the function to return the list of all orders
console.log(restaurant.order);

// Output all orders to the console using console.table()
console.table(restaurant.order)