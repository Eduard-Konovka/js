// // #3-4
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// }

// // Change code below this line
// const ownerName = apartment.owner.name
// const ownerPhone = apartment.owner.phone
// const ownerEmail = apartment.owner.email
// const numberOfTags = apartment.tags.length
// const firstTag = apartment.tags[0]
// const lastTag = apartment.tags[numberOfTags - 1] // либо = apartment.tags[apartment.tags.length - 1]
// // Change code above this line

// console.log(ownerName, ownerPhone, ownerEmail, numberOfTags, firstTag, lastTag)

// -------------------------------------------

// // #3-10
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// }

// const keys = []
// const values = []

// // Change code below this line
// for (const key in apartment) {
//   keys.push(key)
//   values.push(apartment[key])
// }

// console.log('keys: ', keys)
// console.log('values: ', values)

// -------------------------------------------

// // #3-12
// function countProps(object) {
//   let propCount = 0
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1
//     }
//   }
//   // Change code above this line
//   return propCount
// }

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }))

// -------------------------------------------

// // #3-13
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// }
// const values = []
// // Change code below this line
// const keys = Object.keys(apartment)

// for (const key of keys) {
//   values.push(apartment[key])
// }

// console.log(values)

// -------------------------------------------

// // #3-14
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0
//   const keys = Object.keys(object)

//   for (const key of keys) {
//     propCount += 1
//   }

//   return propCount
//   // Change code above this line
// }

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }))

// -------------------------------------------

// // #3-16
// function countTotalSalary(salaries) {
//   let totalSalary = 0
//   // Change code below this line
//   for (const key in salaries) {
//     if (salaries.hasOwnProperty(key)) {
//       totalSalary += salaries[key]
//     }
//   }
//   // Change code above this line
//   return totalSalary
// }

// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }))

// -------------------------------------------

// // #3-17
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ]

// const hexColors = []
// const rgbColors = []
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex)
//   rgbColors.push(color.rgb)
// }

// console.log(hexColors)
// console.log(rgbColors)

// -------------------------------------------

// // #3-18
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ]

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price
//     }
//   }

//   return null
//   // Change code above this line
// }

// console.log(getProductPrice('Scanner'))
// console.log(getProductPrice('Engine'))

// -------------------------------------------

// // #3-19
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ]

// function getAllPropValues(propName) {
//   // Change code below this line
//   const params = []

//   for (const product of products) {
//     if (!product[propName]) {
//       return []
//     }
//     params.push(product[propName])
//   }
//   return params
//   // Change code above this line
// }

// console.log(getAllPropValues('category'))

// -------------------------------------------

// // #3-20
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ]

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки

//   for (let i = 0; i < products.length; i += 1) {
//     if (products[i].name === productName) {
//       return products[i].price * products[i].quantity
//     }
//   }
//   return 0
//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice('Blaster'))
// console.log(calculateTotalPrice('Droid'))

// -------------------------------------------

// // #3-30
// function makeTask(data) {
//   const completed = false
//   const category = 'General'
//   const priority = 'Normal'
//   // Change code below this line
//   makeTask.text = ''
//   const newTask = { completed, category, priority }
//   return { ...newTask, ...data }
//   // Change code above this line
// }

// console.log(makeTask({}))
// console.log(makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' }))

// -------------------------------------------

// // #3-33
// // Change code below this line
// function findMatches(array, ...args) {
//   const matches = [] // Don't change this line

//   for (let arg of args) {
//     for (let element of array) {
//       if (arg === element) {
//         matches.push(arg)
//       }
//     }
//   }
//   // Change code above this line
//   return matches
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7))
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2))
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16))

// -------------------------------------------

// // #3-35
// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.books.indexOf(oldName)
//     this.books.splice(bookIndex, 1, newName)
//     // Change code above this line
//   },
// }

// bookShelf.updateBook('Haze', 'Dungeon chronicles')
// console.log(bookShelf.books)

// -------------------------------------------

// // #3-41
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions
//   },
//   addPotion(potionName) {
//     if (this.potions.includes(potionName)) {
//       return `Potion ${potionName} is already equipped!`
//     }

//     this.potions.push(potionName)
//   },
//   removePotion(potionName) {
//     for (const potion of this.potions) {
//       if (potion.name === potionName) {
//         this.potions.splice(this.potions.indexOf(potion), 1)
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`
//   },
//   // Change code above this line
// }

// // console.log(atTheOldToad.potions[1].name)
// // console.log(atTheOldToad.getPotions())
// // atTheOldToad.addPotion({ name: 'Invisibility', price: 620 })
// // atTheOldToad.addPotion({ name: 'Power potion', price: 270 })
// // atTheOldToad.removePotion('Dragon breath')
// // atTheOldToad.removePotion('Speed potion')
// // atTheOldToad.updatePotionName('Dragon breath', 'Polymorth')
// // atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion')
// console.log(atTheOldToad.getPotions())
