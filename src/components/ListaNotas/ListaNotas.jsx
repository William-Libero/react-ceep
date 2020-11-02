import React, { Component } from 'react';
import CardNota from '../CardNotas/';
import "./estilo.css"

class ListaNotas extends Component{
    constructor(){
        super();
        this.state = {
            notas : []
        }
        this._novasNotas = this._novasNotas.bind(this)
    }

    componentDidMount(){
        this.props.notas.inscrever(this._novasNotas);
    }

    componentWillUnmount(){
        this.props.notas.desinscrever(this._novasNotas);
    }

    _novasNotas(notas){
        this.setState({...this.state, notas});
    }

    render(){
        return <ul className="lista-notas">{this.state.notas.map( (notas, index) => {
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