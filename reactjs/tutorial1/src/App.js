import React, { useState } from "react";
import { Button, Col, Container, Row, InputGroup, Form } from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0);
  const[username,setUsername]= useState('none')

  const IncreaseNumber = (e) => {
    setCount(count + 1);
  };

  const DecreaseNumber = (e) => {
    setCount(count - 1);
  };

  const handleChange =(e)=>{
    console.log(e.target.value)
    setUsername(e.target.value)
  }

  return (
    <Container fluid={false}>
      <Row className="justify-content-center align-items-center text-center">
        <Col md={5} className="bg-primary p-5 text-dark">
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              onChange={handleChange}
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <Button size="lg" variant="danger" className="rounded-0 mb-2">
            Display UserName
          </Button>

          <Button size="lg" variant="light" onClick={IncreaseNumber}>
            Increase number+
          </Button>
          <h1>{username}</h1>
        </Col>
        <Col md={5} className="bg-success p-5">
          <Button size="lg" variant="light" onClick={DecreaseNumber}>
            Decrease number -
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center text-center">
        <Col md={10} className="bg-warning p-5">
          <h1>{count}</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
