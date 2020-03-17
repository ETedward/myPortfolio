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
import Container from 'react-bootstrap/Container';

import Footer from './components/Footer.js';
import HomePage from './pages/HomePage.js';
import PortfolioPage from './pages/Portfolio.js';
import ContactPage from './pages/Contact.js';

import logo from './images/ET_logo.png'

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = { 
      title: 'Edward Time',
      headerLinks: [
       { title: 'Portfolio', path: '/portfolio'},
       { title: 'Contact', path: '/contact'},
      ],
      home: {
        title: 'HELLO',
        subtitle: 'My name is Edward',
        text: 'Code the Truth to Light'
      },
      portfolio: {
        title: 'Scripts & Stories',
        text: 'checkout my projects below'
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
        <Container fluid  = {true}>
          <Navbar className = "border-bottom" bg = "transparent" expand = "lg">
            
            <NavbarBrand> 
              <Link className = "nav-Link" to = "/"> 
              <img id="myLogo" src={logo} class="how-img img-responsive"/>
              </Link>
            </NavbarBrand> 
            <Navbar.Toggle className = "border-0" aria-controls = "navbar-toggle"/>
            <NavbarCollapse id = "navbar-toggle">
              <Nav className = "ml-auto">
                <Link className = "nav-link" to = "/"> About </Link>
                <Link className = "nav-link" to = "/portfolio"> Portfolio </Link>
                <Link className = "nav-link" to = "/contact"> Contact </Link>
              </Nav>
            </NavbarCollapse>
          </Navbar>
          
        <Route path = "/" exact render={() => <HomePage title= {this.state.home.title} subtitle = {this.state.home.subtitle} text = {this.state.home.text}/> } />
        <Route path = "/portfolio" exact render={() => <PortfolioPage title= {this.state.portfolio.title} subtitle = {this.state.portfolio.subtitle} text = {this.state.portfolio.text}/> } />
        <Route path = "/contact" exact render={() => <ContactPage title= {this.state.contact.title} text = {this.state.contact.text}/> } />
        <Footer/>
        
        </Container>
      </Router>
    );
  }
}

export default App;
