import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "react-bootstrap/navbar";
import Nav from "react-bootstrap/nav";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavbarCollapse from "react-bootstrap/NavbarCollapse"
import './App.css';
import Container from 'react-bootstrap/Container'

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = { 
      title: 'Edward Time',
      headerLinks: [
       { title: 'Home', path: '/' },
       { title: 'About', path: '/about'},
       { title: 'Contact', path: '/contact'},
      ],
      home: {
        title: 'Script => Stories',
        subtitle: 'Code the Truth to Light',
        text: 'checkout my projects below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s talk!'
      }


    }
  }
  render()
  {
    return (
      <Router> 
        <Container fluid = {true}>
          <Navbar className = "border-bottom" bg = "transparent" expand = "lg">
            <NavbarBrand> Edward Tian </NavbarBrand> 
            <Navbar.Toggle className = "border-0" aria-controls = "navbar-toggle"/>
            <NavbarCollapse id = "navbar-toggle">
              <Nav className = "ml-auto">
                <Link className = "nav-link" to = "/"> Home </Link>
                <Link className = "nav-link" to = "/about"> About </Link>
                <Link className = "nav-link" to = "/portfolio"> Portfolio </Link>

              </Nav>
            </NavbarCollapse>
          </Navbar>
          
        Hello People
        </Container>
      </Router>
    );
  }
}

export default App;
