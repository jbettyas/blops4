import React, { Component } from 'react';
import logo from '../alcatrazlogo.jpg';
//import './App.css';
import { ALCATRAZ } from '../shared/alcatraz';
import { Button, Row, Col } from 'reactstrap';


class Alcatraz extends Component {

  constructor(props) {
    super(props);
    this.state = {
      alcatraz: ALCATRAZ,
      result: ""
    }
    this.generateAlcatraz = this.generateAlcatraz.bind(this);
  }

  generateAlcatraz() {
    var location =[];

    var placenumber = Math.floor(Math.random() * this.state.alcatraz.length);
    //console.log(placenumber);

    for(var i=0; i<this.state.alcatraz.length; i++){
      if(placenumber === this.state.alcatraz[i].id) {
        location.push(this.state.alcatraz[i].spot);
      }
    }
    this.setState({ result: location });
  }

  render() {
    //console.log(this.state.result);

    var jumpplace = this.state.result !== "" ? <p><span className="nav-theme"><strong>{this.state.result[0]}</strong></span></p> : null;

    return (
        <div className="app">
            <div className ="App-header">
                <Row className="row-content">
                    <Col xs={{ size: 10, offset: 1 }} lg={{ size: 6, offset: 3 }}>
                        <img src={logo} alt="Alcatraz" style={{ width: '100%' }} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button color="danger" onClick={this.generateAlcatraz}>Where you wanna drop?</Button>
                    </Col>
                </Row>
                <Row className="row-content">
                    <Col>
                        {jumpplace}
                    </Col>
                </Row>
            </div>
        </div>
    );
  }
}

export default Alcatraz;
