// let base = prompt('Введи число!');
// base = Number(base);
// console.log(base);

// let power = prompt('Введи степень!');
// power = Number(base);
// console.log(power);

// const result = base ** power;
// console.log(result);


// Генератор псевдослучайных чисел с плаающей запятой в диапазоне 0...1 
let rand1 = (Math.random()); 
rand1 = Number.parseFloat(rand1);
console.log(rand1);

// Генератор целых псевдослучайных чисел в диапазоне 0...100
let rand2 = Number.parseInt(Math.random() * 100); 
console.log(rand2);
// Или
let rand3 = Math.round(Math.random() * 100); 
console.log(rand3);

// Генератор целых псевдослучайных чисел в диапазоне min...max
const max = 100;
const min = 90;
let rand4 = Number.parseInt(Math.random() * (max - min) + min); 
console.log(rand4);
// Или
let rand5 = Math.round(Math.random() * (max - min) + min); 
console.log(rand5);