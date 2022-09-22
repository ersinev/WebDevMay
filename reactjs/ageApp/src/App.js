import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Col, Container, Row, InputGroup, Form } from "react-bootstrap";

function App() {
  const [username, setUsername] = useState({});
  const [resultBtn,setButton]= useState('')
  const FetchingData = async () => {
    let res = await fetch(`https://who1am.herokuapp.com/${username}`);
    let data = await res.json();
    setUsername(data)
    

    
  };
    const GetUser = (e)=>{
      setUsername (e.target.value)
   }
    
  
  return (
    <Container fluid={false}>
      <Row className="justify-content-center align-items-center text-center">
        <Col md={5} className="bg-primary p-5 text-dark">
        <InputGroup className="mb-3">
      
        <Form.Control
          onChange={GetUser}
          placeholder="Enter your name"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Button onClick={FetchingData} className="bg-dark resultBtn">Get Results</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
