import Header from './Header';
import Body from './Body';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container fluid="md">
        <Row>
          <Col md={5}>
            <Header />
          </Col>
          
          <Col md={7}>
            <Body />
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default App;
