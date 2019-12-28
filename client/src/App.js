import React from 'react';
import Main from './components/main';
import './App.css';
// import Amit from './components/amit'
import { Container, Col,Row,Navbar} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
  {/*<h1>Battles of Game Of Thrones</h1>*/}
      <Navbar>
        <Navbar.Brand>
          <img
            src="images/logo.png"
            className="d-inline-block align-top"  
            alt="Game of Thrones logo"
          />
        </Navbar.Brand>
      </Navbar>
      <h2>Battles of Game Of Thrones</h2>
      <Container>
        <Row>
          <Col><Main />  </Col>
        </Row>
      </Container>
      <footer className="blockquote-footer">
        Designed and Developed by <cite title="Source Title">Shubham Thakre</cite>
      </footer>
    </div>
  );
}




export default App;
