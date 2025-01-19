let fuel = 1000;
let distance = 0;

// Så länge det finns fuel så gör detta:
while(fuel > 0) {
    // Öka distansen för varje loop med 1
    distance++;

    if(distance >= 100 && distance < 200) {
        // Med continue så kan man avsluta nuvarande iteration och återgå tillbaka till loopens start och kolla om det ska köras. Den kommer inte att köra nedanstående.
        continue;
    }

    // Minska fuel för varje loop med 1
    fuel--;

    if(distance == 500) {
        // När distansen kommit till 500 så kommer det att bryta loopen.
        break;
    }
}

console.log(`Totalt har du åkt ${distance} och du har ${fuel} fuel kvar.`)