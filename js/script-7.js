const article = document.querySelector('.article')
const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
   <a class="link" href="#">Read more...</a>`

// Уберите += и поставьте =, видите результат? заголовок удаляется,
// еще раз перечитайте сноску о работе innerHTML, о том как содержимое перезаписывается
// Если необходимо добавить к уже существующей разметке, то используем +=
article.innerHTML += htmlString

// Можно делать множественные вставки, для этого мы конкатенируем
// всю необходимую разметку в одну строку, после чего присваиваем ее
// innerHTML родителя.
// Почему именно так, а не поэлементно? Об этом мы поговорим далее.
const list = document.querySelector('.list')
const tech = ['HTML', 'CSS', 'JavaScript', 'React', 'Node']

const markup = tech.reduce((string, item) => string + `<li>${item}</li>`, '')

// Посмотрите что будет в консоли, одна длинная строка с "тегами"
console.log(markup)

// Вешаем всю разметку за одно обращение к DOM
list.innerHTML = markup

// -----------------------------------------------------------------------------------

const openModal = e => {
  if (e.target.nodeName !== 'IMG') {
    return
  }

  e.preventDefault()
  modalRef.classList.add('is-open')
  modalImgRef.src = e.target.dataset.source
  modalImgRef.alt = e.target.alt
  closeBtnRef.addEventListener('click', closeModal)
  modalOverlay.addEventListener('click', closeModal)
}

const closeModal = () => {
  modalRef.classList.remove('is-open')
  modalImgRef.src = ''
  document.removeEventListener('keydown', keyCheck)
  closeBtnRef.removeEventListener('click', closeModal)
  modalOverlay.removeEventListener('click', closeModal)
}

// -----------------------------------------------------------------------------------

// Самовызывающаяся функция
;(() => {
  const refs = {
    openModalBtn: document.querySelector('.order-t__button'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  }

  refs.openModalBtn.addEventListener('click', toggleModal)
  refs.closeModalBtn.addEventListener('click', toggleModal)

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden')
  }
})()
