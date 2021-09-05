// выполнится первым
console.log('First')

setTimeout(() => {
  // выполнится третьим, спустя 2 секунды
  console.log('Second')
}, 2000)

// выполнится вторым
console.log('Third')

function sayHello() {
  console.log('Hello!')
}

const timerId = setTimeout(sayHello, 5000)

clearTimeout(timerId)

const date = new Date()
console.log('Date: ' + date)

// возвращает день месяца от 1 до 31
console.log('getDate(): ' + date.getDate())

// возвращает день недели от 0 до 6
console.log('getDay(): ' + date.getDay())

// возвращает месяц от 0 до 11
console.log('getMonth(): ' + date.getMonth())

// возвращает год из 4 цифр
console.log('getFullYear(): ' + date.getFullYear())

// возвращает час
console.log('getHours(): ' + date.getHours())

// возвращает минуты
console.log('getMinutes(): ' + date.getMinutes())

// возвращает секунды
console.log('getSeconds(): ' + date.getSeconds())

// возвращает миллисекунды
console.log('getMilliseconds(): ' + date.getMilliseconds())

// возвращает кол-во миллисекунд прошедших со старта эпохи Unix
console.log('getTime(): ' + date.getTime())

let result = 'Date: '
result += date.getFullYear() + '/' // год
result += date.getMonth() + '/' // месяц, начиная с 0
result += date.getDate() + '. Day of week: ' // день недели, начиная с 1
result += date.getDay() + '.' // день , начиная с 0

result += ' Time: ' + date.getHours() + ':' // часы
result += date.getMinutes() + ':' // минуты
result += date.getSeconds() + ':' // секунды
result += date.getMilliseconds() + '' // милисекунды

// строка должна показать текущее время и дату
console.log(result) // "Date: 2017/8/6. Day of week: 3. Time: 21:18:12:483"
// ...  значения будут меняться :-)

let date2 = new Date()

// формат вывода
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
}

// Украина
const localeUk = date2.toLocaleString('Uk-uk', options)
console.log(localeUk) // понеділок, 19 бер. 2018 р., 17:42

// USA
const localeUs = date2.toLocaleString('en-US', options)
console.log(localeUs) // Monday, Mar 19, 2018, 5:43 PM

console.log(date2.toString())
console.log(date2.toDateString())
console.log(date2.toTimeString())

const objDate = new Date()
console.log(objDate)
