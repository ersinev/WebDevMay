//https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${keyword}`
let btn = document.getElementById('btn')
let param = document.getElementById('param')


async function getVeri (){
    let response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=react`)
    let data = await response.json()
    return data.query.search
    
}

console.log(getVeri())

const g= t=> document.createElement(t)

btn.addEventListener('click', ()=>{
    getVeri().then(x=>{
       x.forEach(element => {
            let sonuc =document.createElement('div')
            sonuc.innerHTML= element.title
            document.body.append(sonuc)
       });
    })
})

