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
import AboutPage from './pages/About.js';
import PortfolioPage from './pages/Portfolio.js';
import ContactPage from './pages/Contact.js';


class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = { 
      title: 'Edward Time',
      headerLinks: [
       { title: 'About', path: '/about' },
       { title: 'Portfolio', path: '/portfolio'},
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
      portfolio: {
        title: 'View my work!'
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
                <Link className = "nav-link" to = "/contact"> Contact </Link>
              </Nav>
            </NavbarCollapse>
          </Navbar>
          
        Hello People
        <Route path = "/" exact render={() => <HomePage title= {this.state.home.title} text = {this.state.home.text}/> } />
        <Route path = "/about" exact render={() => <AboutPage title= {this.state.about.title} text = {this.state.about.text}/> } />
        <Route path = "/portfolio" exact render={() => <PortfolioPage title= {this.state.portfolio.title} text = {this.state.portfolio.text}/> } />
        <Route path = "/contact" exact render={() => <ContactPage title= {this.state.contact.title} text = {this.state.contact.text}/> } />
        <Footer/>
        
        </Container>
      </Router>
    );
  }
}

export default App;
