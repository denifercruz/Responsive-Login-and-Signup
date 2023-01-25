const forms = document.querySelector('.forms'),
  pwShowHide = document.querySelectorAll('.eye-icon'),
  links = document.querySelectorAll('.link')

pwShowHide.forEach(eyeIcon => {
  eyeIcon.addEventListener('click', () => {
    let pwFileds =
      eyeIcon.parentElement.parentElement.querySelectorAll('.password')
    pwFileds.forEach(password => {
      if (password.type == 'password') {
        password.type = 'text'
        eyeIcon.classList.replace('bx-hide', 'bx-show')
        return
      }
      password.type = 'password'
      eyeIcon.classList.replace('bx-show', 'bx-hide')
    })
  })
})

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault() //prevent form submit
    forms.classList.toggle('show-signup')
  })
})
