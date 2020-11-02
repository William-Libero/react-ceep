import React, { Component } from 'react';
import './assets/App.css';
import './assets/index.css';
import FormularioNota from './components/FormularioNota/';
import ListaNotas from './components/ListaNotas/';
import ListaDeCategorias from './components/ListaDeCategorias'
import Categorias from './dados/Categorias';
import ArrayDeNotas from './dados/Notas';

class App extends Component {
  constructor(){
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render(){
    return (
      <section>
        <FormularioNota categorias={this.categorias} criarNota={this.notas.criarNota.bind(this.notas)}/>
        <main>
          <ListaDeCategorias categorias={this.categorias} adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}/>
          <ListaNotas notas={this.notas} deletarNota={this.notas.deletarNota.bind(this.notas)}/>
        </main>
      </section>
    )
  }
}

export default App;
