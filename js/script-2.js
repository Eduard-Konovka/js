// #2-9
function getExtremeElements(array) {
    // Change code below this line
    return [array[0], array[array.length - 1]];
    // Change code above this line
  }
console.log('#2-9: ', getExtremeElements(['apple', 'peach', 'pear', 'banana']));

// #2-10 (вариант 1)
function splitMessage(message, delimeter) {
    let words;
    // Change code below this line
    words = message.split(delimeter);
    // Change code above this line
    return words;
}
console.log('#2-10 (вариант 1): ', splitMessage("Mango hurries to the train", " "));

// #2-10 (вариант 2)
function splitMessage2(message, delimeter) {
  return message.split(delimeter);
}
console.log('#2-10 (вариант 2): ', splitMessage2("Mango hurries to the train", " "));

// #2-11
function calculateEngravingPrice(message, pricePerWord) {
    // Change code below this line
  return message.split(" ").length * pricePerWord;
    // Change code above this line
}
console.log('#2-11: ', calculateEngravingPrice("JavaScript is in my blood", 10));

// #2-13 (вариант 1)
function slugify(title) {
  // Change code below this line
  return title.toLowerCase().split(' ').join('-');
  // Change code above this line
}
console.log('#2-13 (вариант 1): ', slugify("Arrays for begginers"));

// #2-13 (вариант 2)
const slugify2 = (title) => title.toLowerCase().split(' ').join('-');
console.log('#2-13 (вариант 2): ', slugify2("Arrays for begginers"));

// #2-16
function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line
  return firstArray.concat(secondArray).slice(0, maxLength);
  // Change code above this line
}
console.log('#2-16: ', makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));

// #2-18
function calculateTotal(number) {
  // Change code below this line
    let sum = 0;
    for (let i = 0; i <= number; i += 1) {
      sum += i;
    }
    return sum;
   // Change code above this line
}
console.log('#2-18: ', calculateTotal(24));

// #2-20
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
	for (const argument of order) {
    total += argument;
  }
  // Change code above this line
  return total;
}
console.log('#2-20: ', calculateTotalPrice([164, 48, 291]));

// #2-21
function findLongestWord(string) {
  // Change code below this line
  let args = string.split(' ');
  let longestWord = '';
  for (let i = 0; i < args.length; i += 1) {
    if (args[i].length > longestWord.length) {
      longestWord = args[i];
    }
  }
  return longestWord;
  // Change code above this line
}
console.log('#2-21: ', findLongestWord("The quick brown fox jumped over the lazy dog"));

// #2-22
function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  numbers[0] = min;
	for (let i = min; i < max; i += 1) {
    numbers.push(i + 1);
  }
  // Change code above this line
  return numbers;
}
console.log('#2-22: ', createArrayOfNumbers(29, 34));

// #2-23
function filterArray(numbers, value) {
  // Change code below this line
  let stack = [];
  for (let i = 0; i <= numbers.length; i += 1) {
    if (numbers[i] > value) {
      stack.push(numbers[i]);
    }
  }
  return stack;
 // Change code above this line
}
console.log('#2-23: ', filterArray([12, 24, 8, 41, 76], 20));

// #2-25
function getCommonElements(array1, array2) {
  // Change code below this line
  let newArray = [];
    for (let i = 0; i < array1.length; i += 1) {
    if (array2.includes(array1[i])) {
      newArray.push(array1[i]);
    }
  }
  return newArray;
 // Change code above this line
}
console.log('#2-25: ', getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// #2-26
function calculateTotalPrice2(order) {
  let total = 0;
  // Change code below this line
  for (const price of order) {
  	total += price;
  }
  // Change code above this line
  return total;
}
console.log('#2-26: ', calculateTotalPrice2([412, 371, 94, 63, 176]));

// #2-27
function filterArray2(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];
  for (const number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }
  return filteredNumbers;
  // Change code above this line
}
console.log('#2-27: ', filterArray2([12, 24, 8, 41, 76], 20));

// #2-29
function getEvenNumbers(start, end) {
  // Change code below this line
  const numbers = [];
  const oddNumbers = [];
  numbers[0] = start;
	for (let i = start; i < end; i += 1) {
    numbers.push(i + 1);
  }
  for (const number of numbers) {
    if (number % 2 === 0) {
      oddNumbers.push(number);
    }
  }
  return oddNumbers;
  // Change code above this line
}
console.log('#2-29: ', getEvenNumbers(3, 11));

// #2-32
function includes(array, value) {
  // Change code below this line
  let boole = false;
  for (const arg of array) {
    if (arg === value) {
      boole = true;
    }
  }
  return boole;
  // Change code above this line
}
console.log('#2-29: ', includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));