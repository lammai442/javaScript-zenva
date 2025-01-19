// Ifall man vill nå sista arrayens indexnr så kan man ta ().lenght - 1)

let database = ['turtle', 'cat', 'dog'];

console.log(database);

let animal = database[0];
console.log(animal);

database[0] = 'pig';

// För att nå sista så vill man åt sista indexnumret. Då lenght räknar alla så blir det i detta fall 3 nr men sista indexnumret här är 2 då man startar från 0. Därför måste man ha .length - 1.
console.log(database[database.length - 1]);


// För att lägga till saker i arrayen i specifika stället så används .splice()
database.splice(1, 0, 'Frog')
console.log('Splicemetoden ' + database);

// För att lägga in saker i arrayen på slutet så används .push()
database.push('Lizzard');
console.log('Pushmetoden ' + database);

// För att ta bort sista arrayen är .pop()
database.pop();
console.log('Popmetoden ' + database);

// För att lägga till i början av arreyen är .unshift()
database.unshift('Mouse', 'Bird');
console.log('Unshift + ' + database);

// För att ta bort i början av arrayen är .shift()
database.shift();
console.log(('Shift ' + database));