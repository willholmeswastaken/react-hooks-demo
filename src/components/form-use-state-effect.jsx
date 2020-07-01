/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";

const formUseState = () => {
  const [ name, setName ] = useState(undefined);
  const [ age, setAge ] = useState(undefined);

  // With this hook, you can keep the array as empty to only fire on mount. Or if you want to observe value changes of a var you can add it to the array of observables.
  useEffect(() => {
      alert('hi this is the use effect hook being hit on mount!');
  }, []);

  return (
    <Container fluid>
      <Row>
          <Col>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Enter name" onKeyUp={ev => setName(ev.target.value)} />
            <Form.Text className="text-muted">
              We'll never share your name with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Age</Form.Label>
            <Form.Control placeholder="Enter age" onKeyUp={ev => setAge(ev.target.value)} />
          </Form.Group>
          <Button variant="primary" type="button" onClick={() => alert(`${name} : ${age}`)}>
            Submit
          </Button>
        </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default formUseState;
