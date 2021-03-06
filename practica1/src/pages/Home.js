import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
//import {Card, CardMedia, CardText, CardTitle} from 'material-ui/Card';
import {indigo400, redA400} from 'material-ui/styles/colors';

import Title from '../components/Title';
import Benefits from "../components/Benefits";
import PlaceCard from "../components/places/PlaceCard";
import data from '../requests/places';


export default class Home extends React.Component{

    constructor(props){
        super(props);

        this.state={
            places:data.places
        }
        this.hidePlace=this.hidePlace.bind(this)
    }

    places(){
        return  this.state.places.map((place,index)=>{
            return(
                <PlaceCard onRemove={this.hidePlace} place={place} index={index} />
            /*<div className="col-xs-12 col-sm-4" key={index}>
                    <Card>
                        <CardMedia>
                            <img src={process.env.PUBLIC_URL+place.imageURL} />
                        </CardMedia>
                        <CardTitle title={place.title}></CardTitle>
                        <CardText>{place.description}</CardText>
                    </Card>
                </div>*/
            );
        })
    }

    hidePlace(place){
        this.setState({
            places: this.state.places.filter(el=> el!=place)
        })
    }


    render() {
        return(

            <section>

                <div className="App-background">
                    <div style={{"wodth":"80%","margin":"0 auto"}}>
                        <div className="Header-main">
                            <Title></Title>
                            <RaisedButton label="Crear cuenta gratuita" secondary={true}/>
                            <img className="Header-illustration" src={process.env.PUBLIC_URL+'/images/mapa.png'}  alt=""/>
                        </div>
                        <div>
                           <Benefits></Benefits>
                        </div>
                    </div>
                </div>

                <div  style={{'backgroundColor':indigo400,'padding':'50px','color':'white'}}>
                     <h3 style={{'fontSize':'24px'}}>Sitios Populares</h3>
                    <div className="row">
                        {this.places()}
                    </div>
                </div>
            </section>

        );
    }
}