const settings = {
  theme: 'dark',
  isAuthenticated: true,
  options: [1, 2, 3],
}

localStorage.setItem('settings', JSON.stringify(settings))

const savedSettings = localStorage.getItem('settings')
const parsedSettings = JSON.parse(savedSettings)

console.log(parsedSettings)

// -------------------------------------------------------------------

const theme = localStorage.getItem('theme')

console.log(theme)

localStorage.removeItem('theme')

console.log(parsedSettings)

localStorage.clear()

console.log(parsedSettings)
