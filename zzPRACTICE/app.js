const name = document.querySelector('.name')
const surname = document.querySelector('.surname')
const btn = document.querySelector('.btn')
const show = document.querySelector('.show')
var StudentList = []

btn.addEventListener('click', ()=>{
    localStorage.setItem(name.value, surname.value)
    StudentList.push(name.value, surname.value)
})
console.log(StudentList)





show.addEventListener('click', ()=>{
    let users =localStorage.getItem(name)
    console.log(users)
})




