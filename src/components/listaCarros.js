import React from 'react';

class AddCar extends React.Component {
    state = {
        modelo: '',
        ano: '',
        cor: ''
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    addCar = () => {
        const novoCarro = {
            modelo: this.state.modelo,
            ano: this.state.ano,
            cor: this.state.cor
        };
        this.props.addCar(novoCarro);
        this.setState({
            modelo: '',
            ano: '',
            cor: ''
        });
    }

    render() {
        return (
            <div>
                <input required type="text" name="modelo" placeholder="Modelo" value={this.state.modelo} onChange={this.handleChange} />
                <input required type="text" name="ano" placeholder="Ano" value={this.state.ano} onChange={this.handleChange} />
                <input required type="text" name="cor" placeholder="Cor" value={this.state.cor} onChange={this.handleChange} />
                <button onClick={this.addCar}>Adicionar Carro</button>
            </div>
        );
    }
}

class DeleteCar extends React.Component {
    handleClick = () => {
        this.props.onDeleteCar(this.props.index);
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Apagar</button>
                <button onClick={this.handleClickEdit}>Editar</button>
            </div>
            
            
        );
    }
}


class CarList extends React.Component {
  state = {
    listaCarros: [
      { modelo: 'Siena', ano: 2010, cor: 'Preto' },
      { modelo: 'Corolla', ano: 2015, cor: 'Cinza' },
      { modelo: 'Corsa', ano: 2012, cor: 'Branco' },
    ],
  };

  addCar = (novoCarro) => {
    const novaLista = [...this.state.listaCarros, novoCarro];
    if (!novoCarro.modelo || !novoCarro.ano || !novoCarro.cor) {
      alert('Preencha os campos');
      return;
    }
    this.setState({ listaCarros: novaLista });
  };

  apagarCarro = (index) => {
    this.setState((state) => ({
      listaCarros: state.listaCarros.filter((carro, i) => i !== index),
    }));
  };

  render() {
    const listaCarros = this.state.listaCarros;
    const carros = [];
    for (let i = 0; i < listaCarros.length; i++) {
      const carro = listaCarros[i];
      carros.push(
        <tr key={i}>
          <td>{carro.modelo}</td>
          <td>{carro.ano}</td>
          <td>{carro.cor}</td>
          <td>
            <DeleteCar index={i} onDeleteCar={this.apagarCarro} />
          </td>
        </tr>
      );
    }
    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Modelo</th>
              <th>Ano</th>
              <th>Cor</th>
            </tr>
          </thead>
          <tbody>
            {listaCarros.length === 0 && (
              <h2>Não há itens na lista</h2>
            )}
            {carros}
          </tbody>
        </table>
        <AddCar addCar={this.addCar} />
      </div>
    );
  }
}

export default CarList;