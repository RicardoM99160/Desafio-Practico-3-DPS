import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { auth } from "../firebase";
import { Router, Link } from "@reach/router";

import CalcularSalario from "./Home/CalcularSalario";
import Crud from "./Home/Crud";
import ListaEmpleados from "./Home/ListaEmpleados";

const ProfilePage = () => {

  // Asigna un user para leer el contexto del tema actual.
  // React encontrará el Provider superior más cercano y usará su valor.
  const user = useContext(UserContext);

  const { photoURL, displayName, email } = user;
  console.log(" Usuario ProfilePage : " + displayName + " - " + email);

  const signOut = () => {
    auth.signOut();  
  };

  return (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">Parcial 3</a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><Link to="/">Inicio</Link></li>
            <li><Link to="listaEmpleados">Lista de empleados</Link></li>
            <li><Link to="crud">Modificar empleado</Link></li>
            <li><Link to="calcularSalario">Calcular salario</Link></li>
            <button className="btn btn-danger" onClick={() => { signOut() }}>
              Sign out</button>
          </ul>
        </div>
      </nav>
      <Router>
        <ListaEmpleados exact path="listaEmpleados" />
        <Crud exact path="crud" />
        <CalcularSalario exact path="calcularSalario" />
      </Router>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <span className="float-right">
              <div
                style={{
                  background: `url(${photoURL || 'https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png'})  no-repeat center center`,
                  backgroundSize: "cover",
                  height: "100px",
                  width: "100px"
                }}
                className="border border-blue-300"
              ></div>
              <br></br>
             Nombre : <h2 className="text-2xl font-semibold">{displayName}</h2>
              <br></br>
             Correo: <h3 className="italic">{email}</h3>
            </span>
          </div>
        </div>
      </div>
          </div>
  )
};

export default ProfilePage;

