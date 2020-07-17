import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      ditto: {}
    }
  }
// Se ejecuta cuando se renderiza el componente
  componentDidMount(){
    // Primer argumento -> url de la petición que queremos realizar 
    // Segundo argumento -> opciones para la petición (herders, body, method) cabeceras, cuerpo y metodo que usaremos
    // Definimos el primer parametro que es la url
    let url = 'https://pokeapi.co/api/v2/pokemon/ditto';
    fetch(url)
    .then(function(response) {
      return response.json(); //Regresa una promesa
    })
    .then(function(myJson) {
      console.log(myJson);
    });
  }


  render(){
    return (
      <div className="App">
        hello
      </div>
    );
  }
}
export default App;

// QUé es fetch? una petición a una api ejemplo de una peticion basica de fetch
// fetch('http://exameple.com/movies.json')
//    .then((response) => {
  // return response.json();
// })
//    .then((myJson) {
  // console.log(myJson);
// });
// 