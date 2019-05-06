// import sayHello from "./hello"
// import sayGoodbye from "./goodbye"
// import SandwichMaker from "./sandwichMaker"

// sayHello()
// sayGoodbye()

// SandwichMaker.placeOrder("rye", "capicola", "provolone")

/*
    Author: Shelley Arnold
    Name: main.js
    Purpose: Entry point of our application
*/
import createCar from "./createCar"
import garage from "./garageFactory"

// Create two cars using the function you imported
const mustang = createCar("Ford", "Mustang");
const accord = createCar("Honda", "Accord");

// Park the cars in the garage
garage.setInventory(mustang);
garage.setInventory(accord);

console.table(garage.getOneCar(mustang));
console.table(garage.getOneCar(accord));

// Drive the cars for a while
mustang.drive("the grocery store");
accord.drive("Indianapolis");