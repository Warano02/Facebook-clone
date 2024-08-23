let inputSearch1 = document.querySelector('header .search input')
let imgBack1 = document.querySelector('header .search img')
let symboleSearch1 = document.querySelector('header .search span')

inputSearch1.addEventListener('input', () => {
    inputSearch1.style.paddingleft = "10px"
    symboleSearch1.style.display = "none"
})

let controlers1 = document.querySelector(".controllers div code")
let details = document.querySelector('.details')
controlers1.addEventListener('click', () => details.classList.toggle('disable'))

let section1 = document.querySelector('.container .left .data section')
let i1 = document.querySelector('.container .left .data .span i')
let controlers2 = document.querySelector('.container .left .data div  .a')

controlers2.addEventListener('click', () => {
    let style = section1.style.display
    if (style == "none") {
        controlers2.textContent = "See less"
        section1.style.display = "block"
        i1.classList.remove('bx-chevron-down')
        i1.classList.add('bx-chevron-up')
    } else {
        controlers2.textContent = "See more"
        section1.style.display = "none"
        i1.classList.add('bx-chevron-down')
        i1.classList.remove('bx-chevron-up')
    }
})
console.log(window.innerWidth);


let NewMessagesBtn = document.querySelector('.new-message-around')
let FindNewConversatio = document.querySelector('.new-messages')
let fa_searchUserBtn = document.querySelector('.active-friends .header .right .bx-search')
let closeSearch1 = document.querySelector(".new-messages svg")
NewMessagesBtn.addEventListener('click', () => FindNewConversatio.classList.toggle('disable'))
fa_searchUserBtn.addEventListener('click', () => FindNewConversatio.classList.toggle('disable'))
closeSearch1.addEventListener('click', () => FindNewConversatio.classList.toggle('disable'))

let Input_Messages_Form = document.querySelector('#typing-message')
let Emogi_List = document.querySelector('.container .right .messages-div .container-copy .formul-s .icons-list')
let Add_File = document.querySelector('.container .right .messages-div .container-copy .formul-s .s2')
let S_Btn = document.querySelector('.container .right .messages-div .container-copy .formul-s button i')
let closeMsg = document.querySelector('.container .right .messages-div .container-copy .bx-x')

let ActiveFriends = document.querySelectorAll('.active-friends_list .friend')
let ActualDisplayS = window.getComputedStyle(FindNewConversatio).display
let InterlocutorName = document.querySelector('.messages-div .container-copy .e .l .interlocutor_name')
let InterlocutorProfil = document.querySelector('.messages-div .container-copy .e .l img')
let chatAre = document.querySelector('.container .right .messages-div')
Input_Messages_Form.addEventListener('input', () => {
    let x = (Input_Messages_Form.value).length
    if (x > 1) {
        S_Btn.classList.remove('bxs-like')
        S_Btn.classList.add('bx-send')
    } else {
        S_Btn.classList.remove('bx-send')
        S_Btn.classList.add('bxs-like')
    }
})
closeMsg.onclick = () => chatAre.style.display = "none"

ActiveFriends.forEach(friends => {
    friends.addEventListener('click', () => {
        const nom = friends.getAttribute('data-nom')
        const profil = friends.getAttribute('data-pro')
        InterlocutorProfil.src = profil
        InterlocutorName.textContent = nom
        if (ActualDisplayS == "block") {
            chatAre.style.right = "176px"
        }
        chatAre.classList.toggle("disable")
    })
});


let FirstFindUser=document.getElementById('fuser1')
let resultFFU=document.querySelector(".head .result")
let notFound1=document.querySelector(".head .result .not-found")

FirstFindUser.addEventListener('input',()=>{
    let x=FirstFindUser.value.length
    if (x>1) {
        resultFFU.style.display="block"
    } else {
        resultFFU.style.display="none"
    }
})