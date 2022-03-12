import React from 'react'
import { Container, Nav, Navbar,NavbarBrand,NavLink } from 'react-bootstrap'
import {MdRestaurantMenu} from 'react-icons/md'
import {FaBars} from 'react-icons/fa';


const NavBar = () => {
  return (
      
    <header>
        <div>
            <Navbar bg="dark" variant="danger" expand="lg" fixed='top'>
                <Container>
                    <Navbar.Toggle  aria-controls="basic-navbar-nav"><FaBars color='red'/></Navbar.Toggle> 
                    <NavbarBrand path="/"><MdRestaurantMenu color="red"/></NavbarBrand>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink href="/" className='link-nav'>Home</NavLink>
                            <NavLink href="/food" className='link-nav'>Food</NavLink>
                            <NavLink href="/drinks" className='link-nav'>Drinks</NavLink>
                            <NavLink href="/pairings" className='link-nav'>Pairings</NavLink>    
                            <NavLink href="/admin" className='link-nav'>Admin</NavLink>
                            <NavLink href="/quiz" className="link-nav">Quiz</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    <NavLink href="/login" className='link-nav justify-content-right'>Log In</NavLink>

                </Container>
            </Navbar>
        </div>
    </header>
  )
}

export default NavBar
