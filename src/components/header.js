import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import Logo from '../images/logo.svg'

const Header = ({ siteTitle }) => (
  <Navbar expand="lg" className="pt-4 pr-0">
    <Navbar.Brand href="/" className="ml-4">
      <img src={Logo} width="136" alt="logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse>
      <Nav className="ml-auto">
        <NavDropdown title="WHAT WE DO" >
          <NavDropdown.Item href="#home">Menu</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="PUBLICATIONS">
          <NavDropdown.Item href="#home">Menu</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="CARREES">
          <NavDropdown.Item href="#home">Menu</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#home">ABOUT US</Nav.Link>
        <Nav.Link href="#home" className="mr-0 contact" >CONTACT US</Nav.Link>
        <a className="m-0 text-light" href="#home" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mx-3" role="img" viewBox="0 0 24 24" focusable="false"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>
        </a>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
