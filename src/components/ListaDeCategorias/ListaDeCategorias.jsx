import React, { Component } from 'react';

class ListaDeCategorias extends Component {
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
                  {this.props.categorias.map( (categoria, index) => {
                      return (<li key={index}>{categoria}</li>)
                  })}
              </ul>
              <input type="text" placeholder="Adicionar categoria" onKeyUp={this._handleEventInput.bind(this)}/>
            </section>
         )
    }
}

export default ListaDeCategorias