import React, { Component } from 'react';
import logo from '../duosicon.png';
//import './App.css';
import { DUOS } from '../shared/duos';
import { Button, Row, Col } from 'reactstrap';


class Duos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      duos: DUOS,
      result: ""
    }
    this.generateDuos = this.generateDuos.bind(this);
  }

  generateDuos() {
    var location =[];

    var placenumber = Math.floor(Math.random() * this.state.duos.length);
    //console.log(placenumber);

    for(var i=0; i<this.state.duos.length; i++){
      if(placenumber === this.state.duos[i].id) {
        location.push(this.state.duos[i].spot);
        location.push(this.state.duos[i].subspot);
        location.push(this.state.duos[i].grid);
      }
    }
    //console.log(location);
    this.setState({ result: location });
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
                  <img src={logo} alt="Duos" style={{ height: 300 }} />
              </Col>
          </Row>
          <Row className="button-bottom">
              <Col>
                  <Button color="danger" onClick={this.generateDuos}>Where you wanna drop?</Button>
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

export default Duos;