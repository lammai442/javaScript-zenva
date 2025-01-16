// Funktion för att logga enklare. Bara att anropa log() och lägga in det som ska loggas som argument.
function log(input) {
    console.log(input);
}

let a = 1 + 1;
log(a)

let b = 10;

let c = a + b;
log(c);

// Challenge
let baseWeight = 10000; 
let foodWeight = 100; 
let passengerWeight = 10; 
let fuelUnitWeight = 2; 
let fuelUnits = 100; // total units of fuel we need

let fuelWeight = fuelUnitWeight * fuelUnits;

let totalWeight = baseWeight + foodWeight + passengerWeight + fuelWeight;
log(totalWeight)
