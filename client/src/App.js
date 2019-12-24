import React from 'react';
import Main from './components/main';
import './App.css';
// import Amit from './components/amit'
import { Container, Col,Row} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h1>Learn React</h1>
      
      <Container>
        <Row>
          <Col><Main />  </Col>
        </Row>
      </Container>
      
    </div>
  );
}




export default App;
