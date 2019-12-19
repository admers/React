import React, {Component} from 'react';
//import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
//import RaisedButton from 'material-ui/RaisedButton'
//import {Card, CardText,CardMedia,CardTitle} from "material-ui/Card";

//import {indigo400,redA400,lightBlueA400,amberA400} from 'material-ui/styles/colors'
//import data from './requests/places';
import Home from "./pages/Home";
import './App.css';
//import Title from "./components/Title";//IMPORTANDO LOS ARCHIVOS
//import {hola} from "./components/Title";//IMPORTANDO LOS ARCHIVOS

class App extends Component {


   constructor(props){
     super(props);
     //console.log(data)
   }
  render(){
    return (
            <MuiThemeProvider>
              <section>

                <Home></Home>

                {/*<div className="App-background">
                  <div style={{"wodth":"80%","margin":"0 auto"}}>
                    <div className="Header-main">
                      <Title></Title>
                      <RaisedButton label="Crear cuenta gratuita" secondary={true}/>
                      <img className="Header-illustration" src={process.env.PUBLIC_URL+'/images/mapa.png'}  alt=""/>
                    </div>
                      <div>
                        <ul>

                          <Card className="Header-Benifit">
                            <CardText >
                              <div className="row">
                                <div className="Header-Benifit-image" style={{'backgroundColor':redA400}}>
                                  <img  src={process.env.PUBLIC_URL+'/images/heart1.png'} alt=""/>
                                </div>
                                <div className="Header-Benifit-content">
                                  <h3>Calificaciones con Emociones</h3>
                                  <p>Califica tus lugares con experiencias</p>
                                </div>
                              </div>
                            </CardText>
                          </Card>

                          <Card className="Header-Benifit">
                            <CardText >
                              <div className="row">
                                <div className="Header-Benifit-image" style={{'backgroundColor':redA400}}>
                                  <img src={process.env.PUBLIC_URL+'/images/wifi.png'} alt=""/>
                                </div>
                                <div className="Header-Benifit-content">
                                  <h3>¿Sin Internet? Sin problemas</h3>
                                  <p>Places funciona sun internet o en conexiones lentas</p>
                                </div>
                              </div>
                            </CardText>
                          </Card>
                          <Card className="Header-Benifit">
                            <CardText >
                              <div className="row">
                                <div className="Header-Benifit-image" style={{'backgroundColor':redA400}}>
                                  <img src={process.env.PUBLIC_URL+'/images/star.png'} alt=""/>
                                </div>
                                <div className="Header-Benifit-content">
                                  <h3>Tus lugares favoritos</h3>
                                  <p>Define tu lista de sitios favoritos</p>
                                </div>
                              </div>
                            </CardText>
                          </Card>
                        </ul>
                      </div>
                    </div>
                </div>

                <div  style={{'backgroundColor':indigo400,'padding':'50px',color:'white'}}>
                    <h3 style={{'fontSize':'24px'}}>Sitios Populares</h3>
                    <div className="row">
                      {this.places()}
                    </div>
                </div>*/}

              </section>
            </MuiThemeProvider>

    );
  }

}

export default App;
