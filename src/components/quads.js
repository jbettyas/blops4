import React, { Component } from 'react';
import logo from '../quadsicon.png';
//import './App.css';
import { QUADS } from '../shared/quads';
import { Button, Row, Col } from 'reactstrap';


class Quads extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quads: QUADS,
      result: ""
    }
    this.generateQuads = this.generateQuads.bind(this);
  }

  generateQuads() {
    var location =[];

    var placenumber = Math.floor(Math.random() * this.state.quads.length);
    //console.log(placenumber);

    for(var i=0; i<this.state.quads.length; i++){
      if(placenumber === this.state.quads[i].id) {
        location.push(this.state.quads[i].spot);
        location.push(this.state.quads[i].grid);
      }
    }
    //console.log(location);
    this.setState({ result: location });
  }

  render() {
    //console.log(this.state.result);

    const Allcontent = () => {

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
                    <Row>
                        <Col>
                            <p><span className="nav-theme"><strong>{this.state.result[1]}</strong></span></p>
                        </Col>
                    </Row>
                </div>
            );
        }
    }

    //var jumpplace = this.state.result !== "" ? <h2>{this.state.result[0]}</h2> : <h2>&nbsp;</h2>;
    //var jumpplacesub = this.state.result[1] !== "" ? <h2>{this.state.result[1]}</h2> : <h2>{this.state.result[2]}</h2>;
    //var jumpplacegrid = this.state.result[1] !== "" ? <h2>{this.state.result[2]}</h2> : <h2>&nbsp;</h2>;

    return (
        <div className="app">
            <div className ="App-header">
                <Row className="row-content">
                    <Col>
                        <img src={logo} alt="Quads" style={{ height: 300 }} />
                    </Col>
                </Row>
                <Row className="button-bottom">
                    <Col>
                        <Button color="danger" block onClick={this.generateQuads}>Where you wanna drop?</Button>
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

export default Quads;