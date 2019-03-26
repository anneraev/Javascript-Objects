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


//////////////////////////////////////////////////////////////////////////////////
//Political campaign object practice
//variable containing district

const candidate = {
    district: "Place",
    platform: {
        taxes: "...are theft, but also more taxes to build the wall.",
        jobs: "...are gifts from the Job Creators. Don't steal form them, but do use the taxes they aren't paying to subsidize their businesses.",
        infrastructure: "¯\_(ツ)_/¯ ",
        healthcare: "Repeal and forget.",
        crime: "Tough on."
    },
    URLdonation: "www.toiletpaperUSA.com",
    eventsCalendar: [{
        monday: "stuff",
        tuesday: "things",
        wednesday: "crap",
        thursday: "shit",
        friday: "sacrifice of small child to patron blood chaos deity",
        saturday: "diet cheat day",
        sunday: "day of rest",
    }, {
        monday: "stuff",
        tuesday: "things",
        wednesday: "crap",
        thursday: "shit",
        friday: "sacrifice of small child to patron blood chaos deity",
        saturday: "diet cheat day",
        sunday: "day of rest",
    }, {
        monday: "stuff",
        tuesday: "things",
        wednesday: "crap",
        thursday: "shit",
        friday: "sacrifice of small child to patron blood chaos deity",
        saturday: "diet cheat day",
        sunday: "day of rest",
    }, {
        monday: "stuff",
        tuesday: "things",
        wednesday: "crap",
        thursday: "shit",
        friday: "sacrifice of small child to patron blood chaos deity",
        saturday: "diet cheat day",
        sunday: "day of rest",
    }],
    volunteers: [],
    biography: "Is not a lizard person.",
    photographs: [{self: []}, {family: []}, {constituents: []}],
};



///////////////////////////////////////////////////////////////////////
const volunteers = [];
//Volunteer object constructor. Called when creating a new volunteer, populates
//with info about that volunteer and a arrays of availability and activities.
const volunteer = function (name, address, email, phone, availability, activities) {
    this.name = name;
    this.address = address;
    this.emal = email;
    this.phone = phone;
    this.availability = availability;
    this.activities = activities;
}

//creates a new volunteer, passing along the various information fields. Also pushes the
//volunteer object into the volunteers array.
const createVolunteer = (name, address, email, phone, availability, activities) => {
    let newVolunteer = new volunteer(name, address, email, phone, availability, activities);
    volunteers.push(newVolunteer);
}

//array of days and times for volunteer availability. 7 days a week, false for unavailable, times when available.
let volunteerAvailability = [];

//Creates an array for the volunteer and returns it so that it can be passed to the
//createVolunteer function. Normally, this would be done by creating an array from the
//value of several inputs when a button is clicked,
//but for the purpose of the exercise, the function call will pass some dummy info. Times
//military, input fields will use AM/MP dropdowns and the event listener function will
//translate to a 24 hour clock.
let mon = false;
let tue = [15, 17];
let wed = false;
let thu = [12, 15];
let fri = false;
let sat = false;
let sun = [6, 12];



const volAvailability = () => {

}