// Funktion för att logga enklare. Bara att anropa log() och lägga in det som ska loggas som argument.
function log(input) {
    console.log(input);
}

let item = 'engine';

if (item === 'engine') {
    log('This is true')
} else if (item !== 'engine') {
    log('This is false')
}

let isEnginge = item == 'engine';
console.log('isEnging ' + isEnginge);

// Challenge
let balance = 100;
let itemPrice = 100;

console.log(balance);

if(balance >= itemPrice) {
    balance -= itemPrice
    console.log(`Du har just nu ${balance} och köpte en sak för ${itemPrice} kr`);  
}
else {
    console.log(`Du har inte råd, du har endast ${balance} och det kostade ${itemPrice}. Du saknar ${itemPrice - balance} kr.`);  
}


