const getBtn = document.getElementById('get')
const postBtn = document.getElementById('post')
const putBtn = document.getElementById('updateput')
const patchBtn = document.getElementById('updatepatch')
const deleteBtn = document.getElementById('delete')


//------------GET REQUEST--------------
getBtn.addEventListener('click', (e)=>{
    fetch('http://localhost:5000/posts')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
   e.preventDefault()
})

//-------------------PUT REQUEST------------------

putBtn.addEventListener('click', (e)=>{
    fetch('http://localhost:5000/posts/2',{
        method:'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        //data must be string data type
        body:JSON.stringify({
            "username":"Joe Dalton",
            "password":"a13123132"
        })
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(`PUT request: ${data}`)
    })
   e.preventDefault()
})


//------------------PATCH REQUEST-------------------

patchBtn.addEventListener('click', (e)=>{
    
    fetch('http://localhost:5000/posts/2',{
        method:'PATCH',
        headers:{
            'Content-Type': 'application/json'
        },
        //data must be string data type
        body:JSON.stringify({
            "username":"Joe DASD"

        })
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(`PATCH request: ${data}`)
    })
   e.preventDefault()
})

//------------------POST REQUEST-------------------

postBtn.addEventListener('click', (e)=>{
    
    fetch('http://localhost:5000/posts',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        //data must be string data type
        body:JSON.stringify({
            "username":"student001",
            "password": "123234"

        })
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(`POST request: ${data}`)
    })
   e.preventDefault()
})


//------------------DELETE REQUEST-------------------

deleteBtn.addEventListener('click', (e)=>{
    
    fetch('http://localhost:5000/posts/3',{
        method:'DELETE'
    })
    
    .then(res=>res.json())
    .then(data=>{
        console.log(`Deleted: ${data}`)
    })
   e.preventDefault()
})