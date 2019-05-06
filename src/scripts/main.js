/*
    Author: your name here
    Name: main.js
    Purpose: Entry point of our application
*/
import createCar from "./createCar"


const garage = []

// Create two cars using the function you imported
const mustang = createCar("Ford", "Mustang")
const accord = createCar("Honda", "Accord")

// Drive the cars for a while
console.log(mustang.drive("the grocery store"))
console.log(accord.drive("Indianapolis"))

// Park the cars in the garage
garage.push(mustang)
garage.push(accord)

console.table(garage);