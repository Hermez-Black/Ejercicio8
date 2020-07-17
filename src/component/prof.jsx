// import React from "react";

// class Form extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       formData: {}
//     };
//   }

//   setInputValue = evento => {
//     this.setState({
//       formData: {
//         ...this.state.formData,
//         [evento.target.name]: evento.target.value
//       }
//     });
//   };

//   render() {
//     return (
//       <div>
//         <form onInput={this.setInputValue}>
//           <input type="text" name="name" placeholder="Nombre" />
//           <input type="text" name="lastname" placeholder="Apellidos" />
//           <input type="email" name="email" placeholder="Email" />
//           <input type="password" name="password" placeholder="Contraseña" />
//         </form>
//       </div>
//     );
//   }
// }

// export default Form;

// import React from "react";
// import Form from "./component/form";
// import "./styles.css";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       usuarios: []
//     };
//   }

//   componentDidMount() {
//     let url = "https://academlo-api-users.herokuapp.com/users";
//     fetch(url)
//       .then(response => response.json())
//       .then(datos => {
//         this.setState({ usuarios: datos.data });
//         console.log(datos);
//       })
//       .catch(error => console.log(error));
//   }

//   render() {
//     return (
//       <div>
//         <Form />
//         {this.state.usuarios.map((usuario, p) => {
//           return <h4 key={p}>{usuario.name}</h4>;
//         })}
//       </div>
//     );
//   }
// }
// export default App;
