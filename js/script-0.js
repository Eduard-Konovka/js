// let elementWidth = '50px';
// const result = Number.parseInt(elementWidth);
// console.log(result);
// console.log(typeof result);

// let elementHeigth = '200.74px';
// const result2 = Number.parseFloat(elementHeigth);
// console.log(result2);
// console.log(typeof result2);

// // Округление
// let salary1 = 1400.16876;
// salary1 = salary1.toFixed(2);
// console.log(salary1);
// console.log(typeof salary1);
// salary1 = Number.parseFloat(salary1);
// console.log('Округление 1400.16876 salary1 - Number.parseFloat:', salary1);
// console.log(typeof salary1);

// let salary2 = 2400.16876;
// salary2 = salary2.toFixed(2);
// console.log(salary2);
// console.log(typeof salary2);
// salary2 = Number(salary2);
// console.log('Округление 2400.16876 salary2 - Number:', salary2);
// console.log(typeof salary2);

// let salary3 = 3400.16876;
// salary3 = Number(salary3.toFixed(2));
// console.log('Округление 3400.16876 salary3 - Number:', salary3);
// console.log(typeof salary3);

// let salary4 = 4400.16876;
// salary4 = Number.parseFloat(salary4.toFixed(2));
// console.log('Округление 4400.16876 salary4 - Number.parseFloat:', salary4);
// console.log(typeof salary4);

// let salary5 = 5400.16876;
// salary5 = Number.parseInt(salary5.toFixed(2));
// console.log('Округление 5400.16876 salary5 - Number.parseInt:', salary5);
// console.log(typeof salary5);

// let salary6 = 6400.16876;
// console.log('Округление 6400.16876 salary6 - Number.parseFloat:', Number.parseFloat(salary6.toFixed(2)));
// console.log(typeof salary6);

// let salary7 = 7400.16876;
// console.log('Округление 7400.16876 salary7 - Number:', Number(salary7.toFixed(2)));
// console.log(typeof salary7);


// let base = prompt('Введи число!');
// base = Number(base);
// console.log(base);

// let power = prompt('Введи степень!');
// power = Number(base);
// console.log(power);

// const result = base ** power;
// console.log(result);


// Генератор псевдослучайных чисел с плаающей запятой в диапазоне 0...1 
// let rand1 = (Math.random()); 
// rand1 = Number.parseFloat(rand1);
// console.log(rand1);

// Генератор целых псевдослучайных чисел в диапазоне 0...100
// let rand2 = Number.parseInt(Math.random() * 100); 
// console.log('Диапазон 0...100 - Number.parseInt:', rand2);
// Или
// let rand3 = Math.round(Math.random() * 100); 
// console.log('Диапазон 0...100 - Math.round:', rand3);

// Генератор целых псевдослучайных чисел в диапазоне min...max
// const max = 100;
// const min = 90;
// let rand4 = Number.parseInt(Math.random() * (max - min) + min); 
// console.log('Диапазон min...max - Number.parseInt:', rand4);
// Или
// let rand5 = Math.round(Math.random() * (max - min) + min); 
// console.log('Диапазон min...max - Math.round:', rand5);


// let rand2 = Number.parseFloat(154.578.toFixed()); 
// console.log(rand2);

// let rand3 = Math.round(154.578); 
// console.log(rand3);

// let pricePerDroid = 3000;
// let orderedQuantity = 5;
// let customerCredits = 23000;
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   let totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice <= customerCredits) {
//     customerCredits -= totalPrice;
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
//   }
//   else {
//     message = `Insufficient funds!`;
//   }
//   return message;
// }


// let message;
// let totalPrice = pricePerDroid * orderedQuantity;
// if (totalPrice <= customerCredits) {
//   customerCredits -= totalPrice;
//   message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
// }
// else {
//   message = `Insufficient funds!`;
// }
// console.log(message);

// function getShippingCost(country) {
//   let message;
//   let price;
//   switch (country) {
//     case 'Chile':
//       price = 250;
//       message = `Shipping to ${country} will cost ${price} credits`
//     break;
      
//     case 'Australia':
//       price = 170;
//       message = `Shipping to ${country} will cost ${price} credits`
//     break;
      
//     case 'Jamaica':
//       price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`
//     break;
      
//     case 'China':
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits`
//     break;

//     default:
//       message = `Sorry, there is no delivery to your country`;
//   }
//   return message;
// }


// // Вывод в консоль вне тела функции результат функции "sum", записанный в "result"
// let a = 2;
// let b = 3;
// function sum() {
//   let result = a + b;
//   return result;
// }
// // console.log('Sum: ', sum(), typeof sum());

// // Второй вариант
// let count = 0;
// for (let i = 0; i <= 10; i += 1) {
//   count = i;
// }
// // console.log(count);

// // Нормализация методами toUpperCase()/toLowerCase()
// let brand = 'samSuNg'
// brand = brand[0].toUpperCase() + brand.slice(1).toLowerCase();
// // console.log(brand);

// 
// let totalSpend = 7000;
// let payment = 500;
// let discount = 0;

// if (totalSpend < 100) {
//   discount = 0;
//   console.log(`У вас нет партнёрской скидки`)
//   console.log(`Сумма заказа $${payment}`)
// } else if (totalSpend >= 100 && totalSpend < 1000) {
//   discount = 0.02;
//   console.log(`Бронзовый партнёр, скидка ${discount * 100}%`)
//   console.log(`Сумма заказа $${payment - (payment * discount)}`)
// } else if (totalSpend >= 1000 && totalSpend < 5000) {
//   discount = 0.05;
//   console.log(`Серебряный партнёр, скидка ${discount * 100}%`)
//   console.log(`Сумма заказа $${payment - (payment * discount)}`)
// } else {
//   discount = 0.1;
//   console.log(`Золотой партнёр, скидка ${discount * 100}%`)
//   console.log(`Сумма заказа $${payment - (payment * discount)}`)
// }

// payment -= payment * discount;
// totalSpend += payment;
// console.log(`Всего потрачено в магазине: $${totalSpend}`)

/*
 * Используем цикл для вывода только нечетных чисел.
 * Для чётных i срабатывает continue, выполнение тела прекращается
 * и управление передаётся на следующую итерацию.
 */
// const number = 10;
// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log('Нечётное i: ', i); // 1, 3, 5, 7, 9
// }

// const clients = ['Mango', 'Poly', 'Ajax', 5, true];

// console.log(clients[2]);

// clients[6] = 'Alex';
// console.log(clients[6]);
// console.log(clients);
// console.log(clients[5]);

// clients.length = 10;
// console.log(clients);

// for (let i = 0; i < clients.length; i += 1) {
//   console.log('Logging clients: ', clients[i]);
// }

// clients.length = 7;
// for (let i = 0; i < 5; i += 1) {
//   clients.push(`label-${i}`);
// }

// console.log('Clients: ', clients);

// for (const client of clients) {
//   console.log(client);
// }

// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }

// /*
//  * Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
//  * и управление передаётся на следующую итерацию.
//  */
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// // Перебор массива
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
//   console.log('Подмассив матрицы matrix[i]: ', matrix[i]);

//   for (let j = 0; j < matrix[i].length; j += 1) {
//     console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
//     total += matrix[i][j];
//   }
// }

// console.log(total); // 45

// // Перебор 3d-массива
// const matrix3d = [
//   [[ 1,  2,  3], [ 4,  5,  6], [ 7,  8,  9]],
//   [[11, 12, 13], [14, 15, 16], [17, 18, 19]],
//   [[21, 22, 23], [24, 25, 26], [27, 28, 29]],
// ];
// let total3d = 0;
// for (let i = 0; i < matrix3d.length; i += 1) {
//   console.log('Подмассив матрицы matrix3d[i]: ', matrix3d[i]);
//   for (let j = 0; j < matrix3d[i].length; j += 1) {
//     console.log('Элемент подмассива матрицы matrix3d[i][j]: ', matrix3d[i][j]);
//     for (let k = 0; k < matrix3d[j].length; k += 1) {
//       console.log('Производная элемента подмассива матрицы matrix3d[i][j][k]: ', matrix3d[i][j][k]);
//       total3d += matrix3d[i][j][k];
//     }
//   }
// }
// console.log(total3d);
// console.table(matrix3d);

// // split
// const message = 'Welcome to Bahamas!';

// // Разбивает строку по разделителю, в данном случае это пробел
// console.log(message.split(' ')); // ["Welcome", "to", "Bahamas!"]

// // Вызов split с пустой строкой разобьёт по буквам
// console.log(message.split('')); // [много букв :)]

// join
// const clients = ['Mango', 'Poly', 'Ajax'];

// Сошьет все элементы массива в строку,
// между каждой парой элементов будет указанный разделитель
// console.log(clients.join(' ')); 
// console.log(clients.join(',')); 
// console.log(clients.join('-')); 

// console.log(1 && true && 'js' && Infinity && 457 && "457") // возвращает последний true
// console.log(1 && true && 0 && '' && false && null) // возвращает первый false
// console.log(0 || false || '' || undefined || NaN || null) // возвращает последний false
// console.log(0 || false || '' || Infinity || NaN || null) // возвращает первый true

// // Перебор массива на самое большое число
// const nambers = [51, 18, 13, 24, 7, 85, 19];
// let biggestNumber = nambers[0];
// for (const namber of nambers) {
//     if (namber > biggestNumber) {
//         biggestNumber = namber;
//     }
// }
// console.log('Самое большое число массива "nambers": ', biggestNumber);

// // Перебор массива на самое малое число
// const nambers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = nambers[0];
// for (const namber of nambers) {
//     if (namber < smallestNumber) {
//         smallestNumber = namber;
//     }
// }
// console.log('Самое маленькое число массива "nambers": ', smallestNumber);

// // Перебор массива на самое малое число при помощи функции
// const smallestNumber2 = function(nambers) {
//     let smallestNumber = nambers[0];
//     for (const namber of nambers) {
//         if (namber < smallestNumber) {
//             smallestNumber = namber;
//         }
//     }
//     return smallestNumber; 
// }
// console.log('Самое маленькое число массива "nambers": ', smallestNumber2([51, 18, 13, 24, 7, 85, 19]));

// const normTitle = function(value) {
// return value.toLowerCase().split(' ').join('-');
// }
// console.log(normTitle("5 GitHub Projects to make you a better DevOps Engineer"));

const books = [
    {
      title: "Последнее королевство",
      author: "Бернард Корнуэлл",
      rating: 8.38,
    },
    {
      title: "На берегу спокойных вод",
      author: "Роберт Шекли",
      rating: 8.51,
    },
    {
      title: "Сон смешного человека",
      author: "Федор Достоевский",
      rating: 7.75,
    },
  ];

  for (const book of books) {
    // Объект книги
    console.log(book);
    // Название
    console.log(book.title);
    // Автор
    console.log(book.author);
    // Рейтинг
    console.log(book.rating);
  }