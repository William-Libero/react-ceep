import React, { Component } from 'react';
import './assets/App.css';
import './assets/index.css';
import FormularioNota from './components/FormularioNota/';
import ListaNotas from './components/ListaNotas/';
import ListaDeCategorias from './components/ListaDeCategorias'

class App extends Component {
  constructor(){
    super();
    this.notas = []
    this.state = {
      notas : [],
      categorias : []
    }
  }

  criarNota(titulo, texto, categoria){
    const novaNota = {titulo, texto, categoria}
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas : novoArrayNotas
    }

    this.setState(novoEstado)
  }

  adicionarCategoria(nomeCategoria){
    const novoArrayCategorias  = [...this.state.categorias, nomeCategoria]
    const novoEstado = {...this.state, categorias:novoArrayCategorias}
    this.setState(novoEstado)
  }

  deletarNota(index){
    let arrayNotas = this.state.notas
    arrayNotas.splice(index,1)
    this.setState({notas:arrayNotas})
  }

  render(){
    return (
      <section>
        <FormularioNota categorias={this.state.categorias} criarNota={this.criarNota.bind(this)}/>
        <main>
          <ListaDeCategorias categorias={this.state.categorias} adicionarCategoria={this.adicionarCategoria.bind(this)}/>
          <ListaNotas notas={this.state.notas} deletarNota={this.deletarNota.bind(this)}/>
        </main>
      </section>
    )
  }
}

export default App;
