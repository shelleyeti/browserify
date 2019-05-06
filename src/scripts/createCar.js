/*
    Author: Shelley Arnold
    Name: createCar.js
    Purpose: Produces a new car object
*/
const CarFactory = (make, model) => {
    const newCar = {
        make: make,
        model: model,
        drive: function(where) {
            console.log(`Vroom, vroom, driving the ${model} to ${where}`)
        }
    };
    return newCar;
};

export default CarFactory