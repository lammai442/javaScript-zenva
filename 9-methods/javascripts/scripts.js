let player = {
    health: 100,
    fun: 0,
    // eatApple: function() {
    //     console.log('eatApple');
    //     //Man måste använda sig av this. för att kunna hämta data inom detta objekt. Annars når man inte den.
    //     this.health += 10;
    // },
    // eatCandy: function() {
    //     console.log('eatCandy');
    //     this.health -= 10;
    // },
    playFun: function() {
        console.log('playFun');
        this.fun += 10;        
    },
    eat: function(food) {
        if (food === 'Apple') {
            this.health += 10;
        } else if (food === 'Candy') {
            this.health -= 10;
        }
    }
}

// player.eatApple();
player.eat('Apple')
console.log(player);
player.eat('Candy')
// player.eatCandy();
console.log(player);
player.playFun();
console.log(player);


