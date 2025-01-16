// Funktion för att logga enklare. Bara att anropa log() och lägga in det som ska loggas som argument.
function log(input) {
    console.log(input);
}

function hourToMinutes(hours) {
    let minutes = hours * 60;
    return minutes;
}

function minutesToYears(minutes) {
    let years = minutes / 365 / 24 / 60;
    return Math.floor(years);
}

log(minutesToYears(525601));

log(hourToMinutes(70));

let dayToHours = function (days) {
    return days * 24;
};

console.log(dayToHours(2));

let stock = 101;
let accountBalance = 200;
let price = 10;

log(`Just nu finns det ${stock} i lager och på kontot finns ${accountBalance} kr.`);

// let order = prompt("Hur många ordrar vill du lägga?");
// let isThereEnoughStock = stock > order;
// if (isThereEnoughStock) {
//   reduceStock(order);
//   increaseBalance(order);
//   log(stock);
// } else {
//   log("Det finns inte tillräcklig i lager.");
// }

// function reduceStock(order) {
//   return (stock = stock - order);
// }

// function increaseBalance(order) {
//   return (accountBalance += order * price);
// }

sellItem(10);
sellItem(10);
sellItem(10);
function sellItem(order) {
    if (order > stock) {
        console.log(`Det finns inte tillräcklig i lager. Det saknas ${order - stock}!`);
    } else {
        stock += -order;
        log("Stock: " + stock);
        accountBalance += order * price;
        console.log(`Just nu finns det ${stock} i lager och på kontot finns ${accountBalance} kr.`);
    }
}
