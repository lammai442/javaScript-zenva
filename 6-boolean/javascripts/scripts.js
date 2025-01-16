// Funktion för att logga enklare. Bara att anropa log() och lägga in det som ska loggas som argument.
function log(input) {
    console.log(input);
}

let distance = 200;
let fuel = 100;
let distanceCondition = distance <= 200 && distance >= 100;
let distanceFuelCondition = distance < 100 && fuel >= 25
let isEngineBroken = false;

if (!isEngineBroken) {
    log('Enginge is broken!')
}
else if (distance > 200) {
    log('Wont make it');
}
else if (distanceCondition && fuel >= 100) {
    log('You will make it')
}
else if(distanceFuelCondition) {
    log('DistanseFuelCondtion: You made it!')
}