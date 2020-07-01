import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FormUseState from "./components/form-use-state";
import FormUseStateEffect from "./components/form-use-state-effect";
import FormUseReducer from "./components/form-use-reducer";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col>
            <h1>Welcome to the form playground!</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Pick your form type below...</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <Tabs defaultActiveKey="useState" id="uncontrolled-tab-example">
              <Tab eventKey="useState" title="UseState">
                <FormUseState />
              </Tab>
              <Tab eventKey="useReducer" title="UseReducer">
                <FormUseReducer />
              </Tab>
              <Tab eventKey="useStateEffect" title="UseStateEffect">
                <FormUseStateEffect />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
