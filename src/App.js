import React, { Component } from 'react';
import './App.css';
import CarList from './components/listaCarros';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//mudei para class component
class App extends Component {
  render() {
    return (
      <div id='cssTest' className="container">
        <h1 className="mt-5">Lista de carros</h1>
        <CarList />
      </div>
    );
  }
}

export default App;