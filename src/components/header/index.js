import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav} from 'react-bootstrap'

import './styles.css'

export default function Header(){
  return(
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="barra-superior">
    <Navbar.Brand >
      <Link to="/"><h1>AM.</h1></Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
    <Navbar.Collapse id="responsive-navbar-nav" className="menu">
      <Nav >
        <Nav.Link>
          <Link to = "/sobre-mim"><h2>Mais sobre</h2></Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/projetos"><h2>Projetos</h2></Link>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}