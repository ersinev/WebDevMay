import { Button } from 'react-bootstrap'
import React from 'react'
import {Container, Col, Row, Badge,InputGroup,Form} from 'react-bootstrap'
import { useState } from "react";
import TodoList from './todoList';
function App() {
  const [users,setUsers]= useState([])
  const [currentuser,setCurrentUser] = useState({})
  const fetchingData = async ()=>{
    console.log('retrieving data')
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await response.json()
    setUsers(data)
    
  }

  const getDetailofUser = (param)=>{
    console.log('testing details',param)
    setCurrentUser(param)
  }
  return (
    <Container className='bg-dark text-light p-5 text-center container-fluid '>
      <TodoList></TodoList>
      <Row>
        <Col md={10}>
          <h1>Fetch Data</h1>
          <Button onClick={fetchingData}>Get Users Data</Button>
        </Col>
        <Col md={9}>
          <h1>Details</h1>
          <p><Badge>Phone :</Badge>   {currentuser.phone}</p>
          <p><Badge>Email :</Badge>    {currentuser.email}</p>
          <p><Badge>Username :</Badge>   {currentuser.username}</p>
        </Col>
        {console.log(users)}
        {
          users.map((user,index) =>(
            <div key={index} onClick={()=>getDetailofUser(user)}>
              <p>{user.name + user.id}</p>
            </div>
          ))
        }
      </Row>
    </Container>
  )
}

export default App