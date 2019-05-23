import React, { Component } from 'react';
import soloslogo from '../solosicon.png';
import duoslogo from '../duosicon.png';
import quadslogo from '../quadsicon.png';
import alcatrazlogo from '../alcatrazlogo.jpg';
import { SOLOS } from '../shared/solos';
import { DUOS } from '../shared/duos';
import { QUADS } from '../shared/quads';
import { ALCATRAZ } from '../shared/alcatraz';
import { Button, Row, Col } from 'reactstrap';
//import './App.css';

class ImageLogos extends Component {
    constructor(props) {
        super(props);
        this.state ={
            ///* HOLDS DB NAME
            gametype: this.props.gametype
        }
    }

    render() {
        //console.log(this.state.gametype);
        
        ///* FIGURE OUT WHICH LOGO TO USE
        if(this.state.gametype === SOLOS) {
                var logos = soloslogo;
                var alt = "Solos icon";
            } else if(this.state.gametype === DUOS) {
                logos = duoslogo;
                alt = "Duos icon";
            } else if(this.state.gametype === QUADS) {
                logos = quadslogo;
                alt = "Quads icon";
            } else if(this.state.gametype === ALCATRAZ) {
                logos = alcatrazlogo;
                alt = "Alcatraz icon";
            }

        return(
            <Row className="row-content">
                <Col>
                    <img src={logos} alt={alt} style={{ height: 300 }} />
                </Col>
            </Row>
        );
    }
}

class Locations extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: "",
            gametype: this.props.location.state.gametype,
            dbtype: ""
        }
        this.generateLocations = this.generateLocations.bind(this);
        this.resetLocations = this.resetLocations.bind(this);
    }

    generateLocations() {
        //console.log(this.state.gametype.length);

        ///* ARRAY TO STORE LOCATIONS FROM DB
        var location = [];

        var placenumber = Math.floor(Math.random() * this.state.gametype.length);

        for(var i=0; i<this.state.gametype.length; i++){
        if(placenumber === this.state.gametype[i].id) {
            location.push(this.state.gametype[i].spot);
            location.push(this.state.gametype[i].subspot);
            location.push(this.state.gametype[i].grid);
        }
        }
        //console.log(location);
        this.setState({ result: location });
    }

    resetLocations() {
        this.setState({ result: "" });
    }

    render() {

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
                    <ImageLogos gametype={this.state.gametype}/>
                    <Row className="button-bottom">
                        <Col>
                            <Button color="danger" onClick={this.generateLocations}>Where you wanna drop?</Button>
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

export default Locations;