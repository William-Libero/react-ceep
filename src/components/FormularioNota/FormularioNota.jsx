import React, { Component } from 'react';
import "./estilo.css"

class FormularioNota extends Component{
    constructor(props){
        super(props);
        this.titulo = "";
        this.texto = "";
        this.categoria = "Sem categoria";
    }

    _handleMudancaDeTitulo(evento){
        this.titulo = evento.target.value
    }

    _handleMudancaDeTexto(evento){
        this.texto = evento.target.value
    }

    _handleMudancaDeCategoria(evento){
        this.categoria = evento.target.value
    }

    criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto, this.categoria)
    }

    render(){
        return (
            <form className="form-cadastro" onSubmit={this.criarNota.bind(this)}>
                
                <select name="" onChange={this._handleMudancaDeCategoria.bind(this)}>
                    <option>Sem categoria</option>
                    {this.props.categorias.map( (categoria, index) => {
                        return <option>{categoria}</option>
                    })}
                </select>
                
                <label>Título:</label>
                <input type="text" className="form-cadastro_input" onChange={this._handleMudancaDeTitulo.bind(this)}/>
                
                <label>Texto:</label>
                <textarea className="form-cadastro_input" onChange={this._handleMudancaDeTexto.bind(this)}></textarea>

                <button type="submit">Criar nota</button>
            </form>
        )
    }
}

export default FormularioNota