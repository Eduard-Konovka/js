// --- IntersectionObserver ---

const options = {
  root: null,
  rootMargin: '100px',
  threshold: 0.9,
}

const callback = (elements, observer) => {
  elements.forEach(element => {
    if (element.isIntersecting) {
      console.log('element', element)
    }
  })
}

const observer = new IntersectionObserver(callback, options)

var target = document.querySelector('.target')
observer.observe(target)

// --- сокращённая запись ---

// const callback = (elements, observer) => {
//   elements.forEach(element => {
//     if (element.isIntersecting) {
//       console.log('element', element)
//     }
//   })
// }

// const observer = new IntersectionObserver(callback)

// observer.observe(document.querySelector('.target'))
