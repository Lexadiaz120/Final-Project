import React from 'react'
import { Container, Nav, Navbar, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AuthService from '../../../services/auth.service'    
import ProductSearch from './../../pages/ProductsSearch/ProductsSearch'
import './Navigation.css'  



const authService = new AuthService()


export default function Navigation(props) {
  const logout = () => {
    authService.logout()
      .then(res => props.storeUser(null))
      .catch(err => console.log(err))
  }
  return (
    <Navbar bg="black" expand="md" >
      <Container>
        <Navbar.Brand href="#home"><img className="logoname" src="./digitalsearch.JPG" alt="home"></img></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-center">
            {props.loggedUser ?
              <>
                <Link className="nav-link" to="/perfil">My profile</Link>
                <span className="nav-link" onClick={logout}>Logout</span>
                <Link className="nav-link" to="/adminpanel">Admin Panel</Link>
                <Link className="nav-link" to="/mobiles">Mobiles</Link>
                <Link className="nav-link" to="/notebooks">Laptops</Link>
             
                <Link className="nav-link favorites" to="/favorites">My favorites <img className="favimg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Love_Heart_symbol.svg/2223px-Love_Heart_symbol.svg.png" alt="img"/></Link>
                <ProductSearch />
              </>
              :
              <>
             
                <Link className="nav-link"   to="/register">Sign in</Link>
                <Link className="nav-link" to="/start-session">Login</Link>  
                <Link className="nav-link" to="/mobiles">Mobiles</Link>
                <Link className="nav-link" to="/notebooks">Laptops</Link>  
                <ProductSearch />
              </>
            }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
