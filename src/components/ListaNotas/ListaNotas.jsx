import React, { Component } from 'react';
import CardNota from '../CardNotas/';
import "./estilo.css"

class ListaNotas extends Component{
    render(){
        return <ul className="lista-notas">{this.props.notas.map( (notas, index) => {
            return (
                <li className="lista-notas-item" key={index}>
                    <CardNota 
                        indice={index} 
                        deletarNota={this.props.deletarNota} 
                        titulo={notas.titulo} 
                        texto={notas.texto}
                        categoria={notas.categoria}/>
                </li>
            )
        })}
        </ul>;
    }
}

export default ListaNotas