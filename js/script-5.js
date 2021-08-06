// // #5-6 (вариант 1)
// function Storage(items) {
//   this.items = items
// }

// Storage.prototype.getItems = function () {
//   return this.items
// }

// Storage.prototype.addItem = function (newItem) {
//   this.items.push(newItem)
// }

// Storage.prototype.removeItem = function (item) {
//   this.items.splice(1, 1)
// }

// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор'])
// console.log(storage.getItems()) // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид')
// console.log(storage.getItems()) // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер')
// console.log(storage.getItems()) // ["Нанитоиды", "Антигравитатор", "Дроид"]

// console.log(Storage.prototype.hasOwnProperty('getItems'))
// console.log(Storage.prototype.hasOwnProperty('addItem'))
// console.log(Storage.prototype.hasOwnProperty('removeItem'))

// -------------------------------------------

// // #5-6 (вариант 2)
// class Storage {
//   constructor(items) {
//     this.items = items
//   }

//   getItems() {
//     return this.items
//   }

//   addItem(newItem) {
//     this.items.push(newItem)
//   }

//   removeItem(item) {
//     this.items.splice(1, 1)
//   }
// }
// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор'])
// console.log(storage.getItems()) // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид')
// console.log(storage.getItems()) // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер')
// console.log(storage.getItems()) // ["Нанитоиды", "Антигравитатор", "Дроид"]

// console.log(Storage.prototype.hasOwnProperty('getItems'))
// console.log(Storage.prototype.hasOwnProperty('addItem'))
// console.log(Storage.prototype.hasOwnProperty('removeItem'))

// -------------------------------------------

// // #5-7
// function StringBuilder(baseValue) {
//   this.value = baseValue
// }

// StringBuilder.prototype.getValue = function () {
//   return this.value
// }

// StringBuilder.prototype.padEnd = function (str) {
//   this.value += str
// }

// StringBuilder.prototype.padStart = function (str) {
//   this.value = str + this.value
// }

// StringBuilder.prototype.padBoth = function (str) {
//   this.value += str
//   this.value = str + this.value
// }
// // Пиши код выше этой строки
// const builder = new StringBuilder('.')
// console.log(builder.getValue()) // '.'
// builder.padStart('^')
// console.log(builder.getValue()) // '^.'
// builder.padEnd('^')
// console.log(builder.getValue()) // '^.^'
// builder.padBoth('=')
// console.log(builder.getValue()) // '=^.^='

// -------------------------------------------

// // #5-11
// class Car {
//   #brand

//   constructor({ brand, model, price }) {
//     this.#brand = brand
//     this.model = model
//     this.price = price
//   }

//   getBrand() {
//     return this.#brand
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand
//   }
// }

// const builder = new Car({ brand: 'Volvo', model: 'S1', price: 1000 })
// console.log(builder.getBrand())
// builder.changeBrand('Honda')
// console.log(builder.getBrand())

// -------------------------------------------

// // #5-12
// class Storage {
//   #items

//   constructor(items) {
//     this.#items = items
//   }

//   getItems() {
//     return this.#items
//   }

//   addItem(newItem) {
//     this.#items.push(newItem)
//   }

//   removeItem(item) {
//     const itemIndex = this.#items.indexOf(item)
//     this.#items.splice(itemIndex, 1)
//   }
// }
// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор'])
// console.log(storage.getItems()) // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид')
// console.log(storage.getItems()) // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер')
// console.log(storage.getItems()) // ["Нанитоиды", "Антигравитатор", "Дроид"]

// -------------------------------------------

// // #5-13
// class StringBuilder {
//   #value

//   constructor(baseValue) {
//     this.#value = baseValue
//   }

//   getValue() {
//     return this.#value
//   }

//   padEnd(str) {
//     this.#value += str
//   }

//   padStart(str) {
//     this.#value = str + this.#value
//   }

//   padBoth(str) {
//     this.padStart(str)
//     this.padEnd(str)
//   }
// }

// // Пиши код выше этой строки
// const builder = new StringBuilder('.')
// console.log(builder.getValue()) // '.'
// builder.padStart('^')
// console.log(builder.getValue()) // '^.'
// builder.padEnd('^')
// console.log(builder.getValue()) // '^.^'
// builder.padBoth('=')
// console.log(builder.getValue()) // '=^.^='

// -------------------------------------------

// // #5-15
// class Car {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = 50000
//   #price

//   constructor({ price }) {
//     this.#price = price
//   }

//   get price() {
//     return this.#price
//   }

//   set price(newPrice) {
//     if (newPrice > Car.MAX_PRICE) {
//       return
//     }
//     this.#price = newPrice
//   }
//   // Пиши код выше этой строки
// }

// const audi = new Car({ price: 35000 })
// console.log(audi.price) // 35000

// audi.price = 49000
// console.log(audi.price) // 49000

// audi.price = 51000
// console.log(audi.price) // 49000

// -------------------------------------------

// // #5-19
// class User {
//   email

//   constructor(email) {
//     this.email = email
//   }

//   get email() {
//     return this.email
//   }

//   set email(newEmail) {
//     this.email = newEmail
//   }
// }

// class Admin extends User {
//   // Пиши код ниже этой строки

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   }

//   accessLevel
//   blacklistedEmails = []

//   constructor({ email, accessLevel }) {
//     super(email)
//     this.accessLevel = accessLevel
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email)
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email)
//   }
//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// })

// console.log(mango.email) // mango@mail.com
// console.log(mango.accessLevel) // superuser
// mango.blacklist('poly@mail.com')
// console.log(mango.blacklistedEmails) // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')) //  false
// console.log(mango.isBlacklisted('poly@mail.com')) // true
