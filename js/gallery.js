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
