// // #4-1
// function makePizza() {
//   return 'Ваша пицца готовится, ожидайте.'
// }
// // Пиши код ниже этой строки

// const result = makePizza()
// const pointer = makePizza

// console.log(result)
// console.log(pointer)

// -------------------------------------------

// // #4-2
// function deliverPizza(pizzaName) {
//   return `Доставляем пиццу ${pizzaName}.`
// }

// function makePizza(pizzaName) {
//   return `Пицца ${pizzaName} готовится, ожидайте...`
// }

// // Пиши код ниже этой строки
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName)
// }

// console.log(makeMessage('Роял гранд', makePizza))
// console.log(makeMessage('Ультрасыр', deliverPizza))

// -------------------------------------------

// // #4-4 (вариант 1)
// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, makePizza, onOrderError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return makePizza(pizzaName)
//     }
//     let error = pizzaName
//     return onOrderError(error)
//   },
// }
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! В ассортименте нет пиццы с названием ${error}.`
// }

// // Вызовы метода с колбэками
// pizzaPalace.order('Аль Копчино', makePizza, onOrderError)
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError)
// pizzaPalace.order('Биг майк', makePizza, onOrderError)
// pizzaPalace.order('Венская', makePizza, onOrderError)

// -------------------------------------------

// // #4-4 (вариант 2)
// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName) { // Разница в вариантах 1 и 2 здесь!!!
//     if (this.pizzas.includes(pizzaName)) {
//       return makePizza(pizzaName)
//     }
//     let error = pizzaName
//     return onOrderError(error)
//   },
// }
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! В ассортименте нет пиццы с названием ${error}.`
// }

// // Вызовы метода с колбэками
// pizzaPalace.order('Аль Копчино', makePizza, onOrderError)
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError)
// pizzaPalace.order('Биг майк', makePizza, onOrderError)
// pizzaPalace.order('Венская', makePizza, onOrderError)

// -------------------------------------------

// // #4-5
// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   // Пиши код ниже этой строки
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName)
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName)

//     if (!isPizzaAvailable) {
//       return `В ассортименте нет пиццы с названием «${pizzaName}».`
//     }

//     return `Заказ принят, готовим пиццу «${pizzaName}».`
//   },
//   // Пиши код выше этой строки
// }

// console.log(pizzaPalace.order('Аль Копчино'))
// console.log(pizzaPalace.order('Четыре нарезона'))
// console.log(pizzaPalace.order('Биг майк'))
// console.log(pizzaPalace.order('Венская'))

// -------------------------------------------

// // #4-7 (вариант 1)
// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ]

// // Пиши код ниже этой строки
// const messages = []

// function composeMessage(position) {
//   for (let i = 0; i < this.length; i += 1) {
//     messages.push(`Готовим ${this[i].dish} для ${this[i].email}. Ваш заказ ${i + 1}-й в очереди.`)
//   }
// }

// composeMessage.call(orders)

// console.log(messages)

// -------------------------------------------

// // #4-7 (вариант 2)
// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ]

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   const array = []
//   for (position = 0; position < this.length; position += 1) {
//     array.push(`Готовим ${this[position].dish} для ${this[position].email}. Ваш заказ ${position + 1}-й в очереди.`)
//   }
//   return array
// }

// const messages = []

// messages.push(...composeMessage.call(orders))

// console.log(messages)

// -------------------------------------------

// // #4-7 (вариант 3)
// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ]

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position + 1}-й в очереди.`
// }

// const messages = []

// for (let i = 0; i < orders.length; i += 1) {
//   messages.push(composeMessage.call(orders[i], i))
// }

// console.log(messages)

// -------------------------------------------

// #4-10
// Сервису рассылки электронной почты необходимо добавить логирование действий для сбора статистики.
// Функция logAndInvokeAction(email, action) ожидает почту и действие которое нужно выполнить -
// ссылку на метод объекта service.
// Сбор статистики симулируется логированием строки. Разберись и дополни код так, чтобы он работал верно.
const service = {
  mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
  subscribe(email) {
    this.mailingList.push(email)
    return `Почта ${email} добавлена в рассылку.`
  },
  unsubscribe(email) {
    this.mailingList = this.mailingList.filter(e => e !== email)
    return `Почта ${email} удалена из рассылки.`
  },
}

function logAndInvokeAction(email, action) {
  console.log(`Выполняем действие с ${email}.`)
  return action(email)
}

const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service)) // добавляем .bind(service)
console.log(firstInvoke)
// Почта kiwi@mail.uk добавлена в рассылку.

console.log(service.mailingList)
/* ['mango@mail.com', 
    'poly@hotmail.de', 
    'ajax@jmail.net', 
    'kiwi@mail.uk']*/
const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service)) // добавляем .bind(service)
console.log(secondInvoke)
// Почта poly@hotmail.de удалена из рассылки.

console.log(service.mailingList) // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']
