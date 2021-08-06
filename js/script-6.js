// // #6-2 (вариант 1)
// function filterArray(numbers, value) {
//   const filteredNumbers = []
//   // Пиши код ниже этой строки
//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number)
//     }
//   })
//   // Пиши код выше этой строки
//   return filteredNumbers
// }

// // #6-2 (вариант 2)
// function filterArray(numbers, value) {
//   const filteredNumbers = []
//   // Пиши код ниже этой строки
//   numbers.forEach(number => (number > value ? filteredNumbers.push(number) : null))
//   // Пиши код выше этой строки
//   return filteredNumbers
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3))

// -------------------------------------------

// #6-3 (вариант 1)
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = []
//   // Пиши код ниже этой строки
//   firstArray.forEach(firstArray => {
//     if (secondArray.includes(firstArray)) {
//       commonElements.push(firstArray)
//     }
//   })

//   return commonElements
//   // Пиши код выше этой строки
// }

// // #6-3 (вариант 2)
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = []
//   // Пиши код ниже этой строки
//   firstArray.forEach(firstArray => (secondArray.includes(firstArray) ? commonElements.push(firstArray) : null))

//   return commonElements
//   // Пиши код выше этой строки
// }

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]))
// -------------------------------------------

// //#6-8
// Пиши код ниже этой строки
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = []

//   firstArray.forEach(element => (secondArray.includes(element) ? commonElements.push(element) : null))

//   // Пиши код выше этой строки
//   return commonElements
// }

// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]))

// -------------------------------------------

// // #6-9
// function changeEven(numbers, value) {
//   // Пиши код ниже этой строки
//   const sum = []

//   numbers.forEach(number => (number % 2 === 0 ? sum.push(number + value) : sum.push(number)))

//   return sum
//   // Пиши код выше этой строки
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10))

// -------------------------------------------

// // #6-10
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер']
// // Пиши код ниже этой строки
// const planetsLengths = planets.map(planet => planet.length)

// console.log(planetsLengths)

// -------------------------------------------

// // #6-13
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ]

// // Пиши код ниже этой строки
// const getUserNames = users => users.map(user => user.name)
// // Пиши код выше этой строки

// console.log(getUserNames(users))

// -------------------------------------------

// #6-16
// Используя метод filter() можно выполнить фильтрацию массива так, что в нём останутся только уникальные элементы.
// Этот приём работает только с массивом примитивных значений - не объектов.
// Дополни код так, чтобы в переменной allGenres был массив всех жанров книг(свойство genres) из массива books,
// а в переменной uniqueGenres массив уникальных жанров - без повторений.
// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое'],
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика', 'мистика'],
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика', 'приключения'],
//   },
// ]
// // Пиши код ниже этой строки
// const allGenres = books.flatMap(book => book.genres)
// const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index)

// console.log(allGenres)
// console.log(uniqueGenres)

// -------------------------------------------

// #6-20
const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39,
  },
]

// // Пиши код ниже этой строки
// const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.includes(friendName))
// // Пиши код выше этой строки

// console.log(getUsersWithFriend(users, 'Briana Decker'))

// -------------------------------------------

// #6-21 (вариант 1)
// Пиши код ниже этой строки
// const getFriends = users => {
// return users.flatMap(user => user.friends).filter((friend, index, array) => array.indexOf(friend) === index)
// }
// // Пиши код выше этой строки

// console.log(getFriends(users))

// // #6-21 (вариант 2)
// const getFriends = users.flatMap(user => user.friends).filter((friend, index, array) => array.indexOf(friend) === index)

// console.log(getFriends)

// -------------------------------------------

// // #6-22
// // Пиши код ниже этой строки
// const getActiveUsers = users => {
//   return users.filter(user => user.isActive)
// }
// // Пиши код выше этой строки

// console.log(getActiveUsers(users))

// -------------------------------------------

// // #6-23
// // Пиши код ниже этой строки
// const getInactiveUsers = users => {
//   return users.filter(user => !user.isActive)
// }
// // Пиши код выше этой строки

// console.log(getInactiveUsers(users))

// -------------------------------------------

// #6-27
// const isEveryUserActive = users => users.every(user => user.isActive)

// -------------------------------------------

// // #6-30
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// }
// const playtimes = Object.values(players) // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((acc, num) => {
//   return acc + num
// }, 0)

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length

// console.log(averagePlayTime)

// -------------------------------------------

// #6-31
// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ]
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players
//   .map(player => player.playtime / player.gamesPlayed)
//   .reduce((acc, num) => {
//     return acc + num
//   }, 0)

// console.log(totalAveragePlaytimePerGame)

// -------------------------------------------

// // #6-32 (вариант 1)
// // Пиши код ниже этой строки
// const calculateTotalBalance = users => {
//   return users
//     .map(user => user.balance)
//     .reduce((acc, balance) => {
//       return acc + balance
//     }, 0)
// }
// // Пиши код выше этой строки

// // #6-32 (вариант 2)
// // Пиши код ниже этой строки
// const calculateTotalBalance = users =>
//   users
//     .map(user => user.balance)
//     .reduce((acc, balance) => {
//       return acc + balance
//     }, 0)
// // Пиши код выше этой строки

// console.log(calculateTotalBalance(users))

// -------------------------------------------

// // #6-33 (вариант 1)
// // Пиши код ниже этой строки
// const getTotalFriendCount = users =>
//   users.reduce((acc, users) => {
//     acc.push(...users.friends)
//     return acc
//   }, []).length
// // Пиши код выше этой строки

// // #6-33 (вариант 2)
// const getTotalFriendCount = users => users.flatMap(user => user.friends).length

// console.log(getTotalFriendCount(users))

// -------------------------------------------

// // #6-37
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
// ]
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort((firstAuthor, secondAuthor) =>
//   firstAuthor.author.localeCompare(secondAuthor.author),
// )

// const sortedByReversedAuthorName = [...books].sort((firstAuthor, secondAuthor) =>
//   secondAuthor.author.localeCompare(firstAuthor.author),
// )

// const sortedByAscendingRating = [...books].sort((firstAuthor, secondAuthor) => firstAuthor.rating - secondAuthor.rating)

// const sortedByDescentingRating = [...books].sort(
//   (firstAuthor, secondAuthor) => secondAuthor.rating - firstAuthor.rating,
// )

// -------------------------------------------

// // #6-38
// // Пиши код ниже этой строки
// const sortByAscendingBalance = [...users].sort(
//   (firstBalance, secondBalance) => firstBalance.balance - secondBalance.balance,
// )
// // Пиши код выше этой строки

// console.log(sortByAscendingBalance)

// -------------------------------------------

// // #6-39
// // Пиши код ниже этой строки
// const sortByDescendingFriendCount = users =>
//   [...users].sort((firstFriends, secondFriends) => secondFriends.friends.length - firstFriends.friends.length)
// // Пиши код выше этой строки

// console.log(sortByDescendingFriendCount(users))

// -------------------------------------------

// // #6-40
// // Пиши код ниже этой строки
// const sortByName = users => [...users].sort((firstName, secondName) => firstName.name.localeCompare(secondName.name))
// // Пиши код выше этой строки

// console.log(sortByName(users))

// -------------------------------------------

// // #6-41
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 },
// ]
// const MIN_BOOK_RATING = 8
// // Пиши код ниже этой строки

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort()

// console.log(names)

// -------------------------------------------

// // #6-42
// // Пиши код ниже этой строки
// const sortByDescendingFriendCount = users =>
//   [...users]
//     .sort((firstFriends, secondFriends) => firstFriends.friends.length - secondFriends.friends.length)
//     .map(user => user.name)
// // Пиши код выше этой строки

// console.log(sortByDescendingFriendCount(users))

// -------------------------------------------

// // #6-43
// // Пиши код ниже этой строки
// const getSortedFriends = users => {
//   return [...users]
//     .flatMap(user => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index)
//     .sort()
// }
// // Пиши код выше этой строки

// console.log(getSortedFriends(users))

// -------------------------------------------

// #6-44
// Пиши код ниже этой строки
const getTotalBalanceByGender = (users, gender) => {
  return users.filter(user => user.gender === gender).reduce((acc, users) => acc + users.balance, 0)
}
// Пиши код выше этой строки

console.log(getTotalBalanceByGender(users, 'male'))
console.log(getTotalBalanceByGender(users, 'female'))
