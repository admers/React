import React from 'react';
import {Card, CardText} from "material-ui/Card";
import {redA400,lightBlueA400,amberA400} from "material-ui/styles/colors";

export default class Benefits extends React.Component{

    render() {

        return(
            <ul>

                <Card className="Header-Benifit">
                    <CardText >
                        <div className="row">
                            <div className="Header-Benifit-image" style={{'backgroundColor':redA400}}>
                                <img  src={process.env.PUBLIC_URL+'/images/heart1.png'} alt=""/>
                            </div>
                            <div className="Header-Benifit-content">
                                <h3>Calificaciones con Emociones</h3>
                                <p>Califica tus lugares con experiencias, no con numeross</p>
                            </div>
                        </div>
                    </CardText>
                </Card>

                <Card className="Header-Benifit">
                    <CardText >
                        <div className="row">
                            <div className="Header-Benifit-image" style={{'backgroundColor':lightBlueA400}}>
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
                            <div className="Header-Benifit-image" style={{'backgroundColor':amberA400}}>
                                <img src={process.env.PUBLIC_URL+'/images/star.png'} alt=""/>
                            </div>
                            <div className="Header-Benifit-content">
                                <h3>Tus lugares favoritos</h3>
                                <p>Places funciona sun internet o en conexiones lentas</p>
                            </div>
                        </div>
                    </CardText>
                </Card>
            </ul>
        );
    }

}