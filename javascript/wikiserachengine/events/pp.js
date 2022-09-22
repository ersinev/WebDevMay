const searchInput =document.querySelector('.search-input')
const[wikiSearchBtn,wikiRandomBtn]= document.querySelectorAll('button')
const result =document.querySelector('.results')


async function searchData(keyword,limit){
    let response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=${limit}&srsearch=${keyword}`)
    let data =await response.json()
    return data

}


result.addEventListener('mouseover', (e)=>{
    console.log('mouse over event', e.target)
})

console.log('asdads')

