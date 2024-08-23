let controlers1 = document.querySelector(".controllers div code")
let details = document.querySelector('.details')
controlers1.addEventListener('click', () => details.classList.toggle('disable'))

let slideBar = document.querySelector('main .container-right')
let showSlide = document.querySelector('main .container header .call .bxs-info-circle')
showSlide.addEventListener("click", () => {
    slideBar.classList.toggle('disable')
})

let textInput = document.getElementById('Inputmsg')
let btn_list = document.querySelector('.btn-list')
let submit_Icon = document.querySelector('form button i')

textInput.addEventListener('input', () => {
    let x = textInput.value.length
    if (x > 1) {
        btn_list.style.display = 'none'
        submit_Icon.classList.remove('bxs-like')
        submit_Icon.classList.add('bx-send')
    } else {
        btn_list.style.display = 'flex'
        submit_Icon.classList.remove('bx-send')
        submit_Icon.classList.add('bxs-like')
    }
})