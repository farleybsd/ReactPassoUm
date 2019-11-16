import React, { Component, Fragment } from 'react';
import './App.css';
import Tabela from './tabela'
import Form from './Formulario'

class App extends Component {

  state = {
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100'
      },
      {
        nome: 'Farley',
        livro: 'c#',
        preco: '100'
      }
    ],

  }

  removeAutor = index => {

    const { autores } = this.state

    this.setState({

      autores: autores.filter((autor, posAtual) => {
        //console.log(index,posAtual)
        return posAtual !== index
      }),
    })

  }

  escultadorDeSubmit = autor => {
    this.setState({autores:[...this.state.autores,autor]})
  }

  render() {
    return (

      <Fragment>
        <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
        <Form escultadorDeSubmit={this.escultadorDeSubmit} />
      </Fragment>

    );
  }

}

export default App;
