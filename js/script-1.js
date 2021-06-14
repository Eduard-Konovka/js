let elementWidth = '50px';
const result = Number.parseInt(elementWidth);
console.log(result);
console.log(typeof result);

let elementHeigth = '200.74px';
const result2 = Number.parseFloat(elementHeigth);
console.log(result2);
console.log(typeof result2);

// Округление
let salary1 = 1400.16876;
salary1 = salary1.toFixed(2);
console.log(salary1);
console.log(typeof salary1);
salary1 = Number.parseFloat(salary1);
console.log('Округление 1400.16876 salary1 - Number.parseFloat:', salary1);
console.log(typeof salary1);

let salary2 = 2400.16876;
salary2 = salary2.toFixed(2);
console.log(salary2);
console.log(typeof salary2);
salary2 = Number(salary2);
console.log('Округление 2400.16876 salary2 - Number:', salary2);
console.log(typeof salary2);

let salary3 = 3400.16876;
salary3 = Number(salary3.toFixed(2));
console.log('Округление 3400.16876 salary3 - Number:', salary3);
console.log(typeof salary3);

let salary4 = 4400.16876;
salary4 = Number.parseFloat(salary4.toFixed(2));
console.log('Округление 4400.16876 salary4 - Number.parseFloat:', salary4);
console.log(typeof salary4);

let salary5 = 5400.16876;
salary5 = Number.parseInt(salary5.toFixed(2));
console.log('Округление 5400.16876 salary5 - Number.parseInt:', salary5);
console.log(typeof salary5);

let salary6 = 6400.16876;
console.log('Округление 6400.16876 salary6 - Number.parseFloat:', Number.parseFloat(salary6.toFixed(2)));
console.log(typeof salary6);

let salary7 = 7400.16876;
console.log('Округление 7400.16876 salary7 - Number:', Number(salary7.toFixed(2)));
console.log(typeof salary7);