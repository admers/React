import React from 'react';


export default class Title extends React.Component{
    render() {
        return(

            <div>
                <h1>{this.props.title}</h1>
                <p>Descubre lugares de Manera simple</p>
            </div>
        );
    }
}
//YA NO ES ELIMENTO
export function hola() {
    return "Hola";
}