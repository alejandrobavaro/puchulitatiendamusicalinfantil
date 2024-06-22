import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/estilo.scss';

const Header = ({ cart }) => {
  return (
    <div className="header">
      <div className="container">
        <nav className="nav objetoCostadoDerecho1">
          <Link to="/carrito" className="nav-link carrito-link">
            <i className="bi bi-cart"> Carrito de Compras </i> ({cart.length} Productos Agregados)
          </Link>
        </nav>
        <header className="encabezado">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <button
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
                className="navbar-toggler"
                data-bs-target="#navbarNavAltMarkup"
                data-bs-toggle="collapse"
                type="button"
              >
                <span className="navbar-toggler-icon" />
                <img
                  alt="icono"
                  className="container-fluid menu-logo"
                  src="/img/05-img-costados-larga/16aicono.png"
                />
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link className="nav-link menu-link" to="/">
                    Home
                  </Link>
                  <Link className="nav-link menu-link" to="/contacto">
                    Contacto
                  </Link>
                  <Link className="nav-link menu-link" to="/tienda">
                    Tienda
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
