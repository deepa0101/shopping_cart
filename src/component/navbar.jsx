/* eslint-disable react/prop-types */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
function Navbarcomp(props) {
  let navigate =useNavigate()
   const {countCartItems } = props
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Start-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">All Products</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Popular Items
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">New Arrivals</NavDropdown.Item>
              </NavDropdown>
            </Nav> 
            <Nav><Button variant="dark" onClick={()=> navigate("/cart")}> Cart { countCartItems?(<button className='badge'>{countCartItems}</button>): ("")}</Button></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
export default Navbarcomp;