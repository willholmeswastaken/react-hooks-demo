/* eslint-disable react-hooks/rules-of-hooks */
import React, { useReducer } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const initialState = { name: "will", age: 23 };

const NAME_UPDATE = "NAME_UPDATE";
const AGE_UPDATE = "AGE_UPDATE";

const reducer = (state, action) => {
  switch (action.type) {
    case NAME_UPDATE:
      return { ...state, name: action.val };
    case AGE_UPDATE:
      return { ...state, age: action.val };
    default:
      throw new Error();
  }
};

const formUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Container fluid>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="Enter name"
                onKeyUp={(ev) =>
                  dispatch({ type: NAME_UPDATE, val: ev.target.value })
                }
              />
              <Form.Text className="text-muted">
                We'll never share your name with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Age</Form.Label>
              <Form.Control
                placeholder="Enter age"
                onKeyUp={(ev) =>
                  dispatch({ type: AGE_UPDATE, val: ev.target.value })
                }
              />
            </Form.Group>
            <Button
              variant="primary"
              type="button"
              onClick={() => alert(`${state.name} : ${state.age}`)}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default formUseReducer;
