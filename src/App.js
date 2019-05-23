import React, { Component } from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand,Nav, NavItem, NavLink } from 'reactstrap';
import Home from './components/home';
import Alcatraz from './components/alcatraz';
import Locations from './components/locations';
import navlogo from './logo.png';
import { SOLOS } from './shared/solos';
import { DUOS } from './shared/duos';
import { QUADS } from './shared/quads';
//import Quads from './components/quads';
//import Duos2 from './components/duos';
//import Solos2 from './components/solos';

class App extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
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
                  <NavLink tag={Link} to="/alcatraz" className="underlink">Alcatraz</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to={{pathname: "/quads", state: { gametype: QUADS } }} className="underlink">Quads</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to={{pathname: "/duos", state: { gametype: DUOS } }} className="underlink">Duos</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to={{pathname: "/solos", state: { gametype: SOLOS } }} className="underlink">Solos</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/alcatraz" component={Alcatraz} />
            <Route path="/quads" component={Locations} />
            <Route path="/duos" component={Locations} />
            <Route path="/solos" component={Locations} />
          </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
