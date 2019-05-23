import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import '../App.css';
import { Link } from 'react-router-dom';
import logo from '../logo-all.png';


class Home extends Component {

  render() {

    return (
        <div className="App">
            <div className ="App-header">
                <Row className="row-content">
                    <Col xs={{ size: 10, offset: 1 }} lg={{ size: 6, offset: 3 }}>
                        <img src={logo} alt="Black Ops 4 Blackout Logo" style={{ width: "100%" }} />
                    </Col>
                </Row>
                
                <Row className="home-theme">
                    <Col>
                        <Link to="/alcatraz" className="underlink">Alcatraz</Link>
                    </Col>
                    <Col>
                        <Link to="/quads" className="underlink">Quads</Link>
                    </Col>
                    <Col>
                        <Link to="/duos" className="underlink">Duos</Link>
                    </Col>
                    <Col>
                        <Link to="/solos" className="underlink">Solos</Link>
                    </Col>
                </Row>
            </div>
        </div>
    );
  }
}

export default Home;
