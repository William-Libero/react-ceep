import React, { Component } from 'react';

class ListaDeCategorias extends Component {
    constructor(){
        super();
        this.state = {categorias : []}
        this._novasCategorias = this._novasCategorias.bind(this)
    }

    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias);
    }

    componentWillUnmount(){
        this.props.categorias.desinscrever(this._novasCategorias);
    }

    _novasCategorias(categorias){
        this.setState({...this.state, categorias})
    }

    _handleEventInput(e){
        if(e.key === "Enter"){
            let valorCategoria = e.target.value
            this.props.adicionarCategoria(valorCategoria)
        }
    }
    
    render() { 
        return ( 
            <section>
              <ul>
                  {this.state.categorias.map( (categoria, index) => {
                      return (<li key={index}>{categoria}</li>)
                  })}
              </ul>
              <input type="text" placeholder="Adicionar categoria" onKeyUp={this._handleEventInput.bind(this)}/>
            </section>
         )
    }
}

export default ListaDeCategorias