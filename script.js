const btn =document.getElementById('menubtn')
const nav =document.getElementById('menu')
const close= document.getElementById('closebtn')

close.addEventListener('click', () => {
    nav.classList.add('hidden')
})

   btn.addEventListener('click', () => {
    nav.classList.remove('hidden')
})


