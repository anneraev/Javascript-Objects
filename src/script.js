const output = document.querySelector('.output')

const angus = {
    age: 1,
    breed: "Boxer",
    shed: false,
};

const dog = {
    dogName: "Denver",
    dogAge: 7,
    dogColor: "Brown",
}

const cat = {
    catName: "Jingles",
    catAge: 4,
    catColor: "Black",
}

const animal = [dog, cat]

const car = {
    make: "ford",
    model: "mustang",
    color: "red",
}

const kippers = {
    dogName: "Denver",
    dogAge: 7,
    dogColor: "Brown",
}

const shelterAnimals = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"]

const bob = {
    age: 40,
    sex: "male",
    rabid: false,
    acting: "despair",
};

const virginia = {
    age: 20,
    sex: "female",
    rabid: false,
    acting: "demicky",
};

const carrotcake = {
    age: 4,
    sex: "?",
    rabid: false,
    acting: "innocent",
};

const family = [bob, virginia, carrotcake];
//family has added new pet, Kippers.

family.push(kippers)

console.log(`Virginia is acting ${virginia.acting}`);
console.log("Virginia is acting " + virginia.acting);

output.innerHTML += `Virginia is acting ${virginia.acting}`

carrotcake.targets = [];
carrotcake.targets.push(bob, virginia, kippers);
carrotcake.acting = "violent";
carrotcake.rabid = true;

console.log(carrotcake.targets);
console.log(`Carrotcake is acting ${carrotcake.acting}`);

const keyToLookUp = "breed";

console.log(angus[keyToLookUp]);
console.log(angus.keyToLookUp);


const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log(Object.values(empireStateBuilding))

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

function isObject(val) {
    return val instanceof Object;
}


//Evaluates the object as if its properties were part of an array.
//Because anything that is not a primitive is an object, only the
//values containing arrays will be evaluated as objects, so it is
//possible to pick out the arrays. Once the arrays are isolated, they
//can be added to a singular array called "teachers".
const propertiesArray = Object.values(nashvilleSoftwareSchool);
console.log(propertiesArray);
let arrayValue;
let valueArray;
let teachers = [];
for (var i = 0; i < propertiesArray.length; i += 1) {
    arrayValue = propertiesArray[i];
    console.log(arrayValue);
    if (isObject(arrayValue)) {
        valueArray = Object.values(arrayValue);
        console.log(valueArray);
    };
};

for (var i = 0; i < valueArray.length; i += 1) {
    console.log(valueArray[i])
    console.log(Array.isArray(valueArray))
    for (var j = 0; j < valueArray[i].length; j += 1) {
        console.log(valueArray[i][j]);
        teachers.push(valueArray[i][j]);
    };
};
console.log(teachers);

//or, you could just do it like this since you know the data structure.
// And therefore you know the keys. 
//The above was just a pointless exercise to help me better 
//understand
//objects and arrays and arrays within objects and objects within arrays
//and how to manipulate them.
teachers = [];
const instructors = nashvilleSoftwareSchool.instructors
console.log(instructors.fullTime);
teachers = [].concat(instructors.fullTime, instructors.partTime);
console.log(teachers);

////////////////////////////////////////////////////////////////////////////////////////

//Restaurant Object. Contains an array of the current order and a function for
//creating new orders using order objects as templates.
let newOrder
const restaurant = {
    name: "Bob's Burgers",
    order: [],
    //creates a new order with Object.create(meal), accepts fries and drink values
    //to alter those properties to the specifications of the customer.
    placeOrder: function (meal, fries, drink) {
        newOrder = new comboMeal(meal, fries, drink, number);
        this.order.push(newOrder);
    },
}

//order object constructor
const comboMeal = function (meal, fries, drink) {
    this.mealType = meal;
    this.fries = fries;
    this.drinksize = drink;
};



// Place an order
restaurant.placeOrder("chickenSandwich", "curly", "small");

// Invoke the function to return the list of all orders
console.log(restaurant.order);

// Output all orders to the console using console.table()
console.table(restaurant.order)


//////////////////////////////////////////////////////////////////////////////////