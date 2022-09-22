
const buton = document.querySelector(".buton");

const Fetchingdata = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data= await response.json();
  return data
}


async function toPushP(){
    const data= await Fetchingdata()
    data.forEach(element =>{
        const p = document.createElement('p')
        p.innerText = `${element.name} \t ${element.id}`
    })


buton.addEventListener('click', toPushP())
    // Fetchingdata().then((result)=>{
    //     result.forEach((element)=>{
    //         console.log(element.name)
    //     })
    


 
    




}


  

// buton.addEventListener('click', ()=>{
//     Fetchingdata().then((result) => {
//         result.forEach((element) => {
//         console.log(element)
//         const result = document.querySelector(".result");
//         const names = document.querySelector('.names')
        
//             names.innerHTML+= `<strong>Name : </strong>${element.name} <br/>`
//             result.innerHTML += `<strong>ID :</strong> ${element.id} <br/>`;
          
        
//         });
//       });
    
// })



// buton.addEventListener('click', ()=>{
//     Fetchindata().then(x=>{
//        x.forEach(element => {
//             //let sonuc =document.createElement('div')
//             result.innerHTML= element.title
//            //document.body.append(sonuc)
//        });
//     })
// })
