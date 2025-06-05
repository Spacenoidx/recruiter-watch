import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ReportForm from './pages/ReportForm';
import WallOfShame from './pages/WallOfShame';
import YourRights from './pages/YourRights';
import About from './pages/About';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';


import Button from 'react-bootstrap/Button';


function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">RecruiterWatch</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/report">Report</Nav.Link>
              <Nav.Link as={Link} to="/wall-of-shame">Wall of Shame</Nav.Link>
              <Nav.Link as={Link} to="/your-rights">Your Rights</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<ReportForm />} />
          <Route path="/wall-of-shame" element={<WallOfShame />} />
          <Route path="/your-rights" element={<YourRights />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </Router>
  );
}
export default App;