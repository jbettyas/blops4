import React, { Component } from 'react';
import logo from '../solosicon.png';
//import './App.css';
import { SOLOS } from '../shared/solos';
import { Button, Row, Col } from 'reactstrap';


class Solos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      solos: SOLOS,
      result: ""
    }
    this.generateSolos = this.generateSolos.bind(this);
    this.resetLocations = this.resetLocations.bind(this);
  }

  generateSolos() {
    var location =[];

    var placenumber = Math.floor(Math.random() * this.state.solos.length);
    //console.log(placenumber);

    for(var i=0; i<this.state.solos.length; i++){
      if(placenumber === this.state.solos[i].id) {
        location.push(this.state.solos[i].spot);
        location.push(this.state.solos[i].subspot);
        location.push(this.state.solos[i].grid);
      }
    }
    //console.log(location);
    this.setState({ result: location });
  }

  resetLocations() {
      this.setState({ result: "" });
  }

  render() {
    //console.log(this.state.result);

    const Allcontent = () => {

      const Placecontent = () => {
        if(this.state.result[1] !== "") {
            return(
                <Row>
                    <Col>
                        <p><span className="nav-theme"><strong>{this.state.result[1]}</strong></span></p>
                    </Col>
                </Row>
            );
        } else {
            return(
                null
            );
        } 
    }

      if(this.state.result === ""){
          return(
              null
          );
      } else {
          return(
              <div className="App-header">
                  <Row>
                      <Col>
                          <p><span className="nav-theme"><strong>{this.state.result[0]}</strong></span></p>
                      </Col>
                  </Row>
                  <Placecontent />
                  <Row>
                      <Col>
                          <p><span className="nav-theme"><strong>{this.state.result[2]}</strong></span></p>
                      </Col>
                  </Row>
                  <Row>
                      <Button style={{ backgroundImage: 'linear-gradient(#F4711F, #c35a18)' }} onClick={this.resetLocations}>Reset</Button>
                  </Row>
              </div>
          );
      }
  }

  return (
    <div className="app">
      <div className ="App-header">
        <Row className="row-content">
            <Col>
                <img src={logo} alt="Duos" style={{ height: 300 }} />
            </Col>
        </Row>
        <Row className="button-bottom">
            <Col>
                <Button color="danger" onClick={this.generateSolos}>Where you wanna drop?</Button>
            </Col>
        </Row>
        <Row>
            <Col>
              <Allcontent />
            </Col>
        </Row>
      </div>
    </div>
  );
}
}

export default Solos;