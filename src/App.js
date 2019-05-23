import React, { Component } from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand,Nav, NavItem, NavLink } from 'reactstrap';
import Home from './components/home';
import Alcatraz from './components/alcatraz';
import Quads from './components/quads';
import Duos from './components/duos';
import Solos from './components/solos';
import navlogo from './logo.png';

class App extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {

    return (
      <div>
        <Router>
          <div>
          <Navbar color="dark" dark expand="md" className="nav-theme" fixed="top" sticky="top">
            <NavbarBrand tag={Link} to="/">
              <div className="orange-text">
              <img src={navlogo} alt="Black Ops 4" style={{ width: '50px' }} />
              Button of Death
              </div>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/alcatraz" className="underlink" onClick={this.toggle}>Alcatraz</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/quads" className="underlink" onClick={this.toggle}>Quads</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/duos" className="underlink" onClick={this.toggle}>Duos</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/solos" className="underlink" onClick={this.toggle}>Solos</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/alcatraz" component={Alcatraz} />
            <Route path="/quads" component={Quads} />
            <Route path="/duos" component={Duos} />
            <Route path="/solos" component={Solos} />
          </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
