import React, { Component } from 'react';
import CardNota from '../CardNotas/';
import "./estilo.css"

class ListaNotas extends Component{
    render(){
        return <ul className="lista-notas">{this.props.notas.map( (notas, index) => {
            return (
                <li className="lista-notas-item" key={index}>
                    <CardNota titulo={notas.titulo} texto={notas.texto}/>
                </li>
            )
        })}
        </ul>;
    }
}

export default ListaNotas