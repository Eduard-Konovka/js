const settings = {
  theme: 'dark',
  isAuthenticated: true,
  options: [1, 2, 3],
}

localStorage.setItem('settings', JSON.stringify(settings))

// const savedSettings = localStorage.getItem('settings')
const parsedSettings = JSON.parse(localStorage.getItem('settings'))

console.log('parsedSettings', parsedSettings)
console.log('settings', localStorage.getItem('settings'))

localStorage.setItem('theme', JSON.stringify(settings.theme))
console.log('theme: ', localStorage.getItem('theme'))

localStorage.removeItem('settings')

console.log('removeItem("settings"): ', localStorage.getItem('settings'))

localStorage.clear()

console.log('localStorage.clear(): ', localStorage.getItem('settings'))

// -------------------------------------------------------------------
