import Main from './Main'
import ContactMe from './ContactMe';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Container fluid="md">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/contact" element={<ContactMe />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
