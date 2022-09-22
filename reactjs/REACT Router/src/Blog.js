import { Button } from 'react-bootstrap'
import React, { useEffect, useRef } from 'react'
import { useState } from 'react'

function Blog() {
    const [posts,setposts]= useState([])
    const getAllPosts = async ()=>{
        let response = await fetch('https://jsonplaceholder.typicode.com/posts')
        let posts = await response.json()
        setposts(posts)
    }
    const buttonRef = useRef()
    const inputRef = useRef()
    useEffect(()=>{
        getAllPosts()
        console.log(buttonRef.current)
        console.log(inputRef.current.value)
    },[])



  return (
    <div>
        <Button onClick={getAllPosts} ref={buttonRef}>Get and print posts</Button>
        <input type="text" ref={inputRef} defaultValue='Search something'></input>

        {
            posts.map((post)=>(
                <a href={`/blog/${post.id}`} key={post.id} className="d-block">{post.title}</a>
            ))
        }




    </div>
  )
}

export default Blog