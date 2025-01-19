let currentPopulation = 100;

for(let i = 1; i <= 10; i++) {
    currentPopulation += currentPopulation * 0.05
    console.log(currentPopulation);
    console.log(i);      
} 

// let i = 0;

// while (i < 10) {
//     currentPopulation *= 1.05;
//     i++;
//     console.log(currentPopulation);
//     console.log(i);   
// }