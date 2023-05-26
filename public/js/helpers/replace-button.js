function replaceButton(btn){
  const added = document.createElement('span')
  added.textContent = 'Added'
  added.className = 'added'
  btn.replaceWith(added)

  const checkmarkSpan = document.createElement('span');
  checkmarkSpan.innerHTML = '&#10004;'

  checkmarkSpan.classList.add('checkmark')

  added.insertAdjacentElement('afterend', checkmarkSpan)
}

export default replaceButton