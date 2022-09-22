import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

function BlogDetail() {
    const {id}= useParams()
    const [detail,setDetail] = useState([])

    const FetchingData = async ()=>{
        console.log('aaaaa')
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${[id]}`)
        let data = await response.json()
        setDetail(data)
    }
    
    useEffect(()=>{
        FetchingData()
    },[])
   
  return (
    <div>
        BlogDetail {id}
        <h1>{detail.title}</h1>
        {
            console.log(detail)
        }
    
    </div>
  )
}

export default BlogDetail