import { Routes, Route, Form, } from "react-router-dom";
//componentes de reenderiado
import {ControlerUsers } from './assets/publics/ControlerUsers'
import {ControlerProducts} from './assets/publics/ControlerProducts';
import { FormValidate } from "./assets/publics/FormValidate";
import { FormNewUser } from "./assets/componentsadmin/FormNewUser";
import {FormEditUser } from "./assets/componentsadmin/FormEditUser";
import "./App.css";

export const App = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand " href="/">
            AddminManager
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  opciones Admin
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      className="dropdown-item"
                      href="/admin/controler_Products"
                    >
                      controlador productos
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/admin/controler_users">
                      controlador usuarios
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      configuración admin
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/home">
                  user
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="/create_user_admin" aria-disabled="true">
                  create Admin
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<FormValidate />} />
        <Route path="/admin/controler_users" element={<ControlerUsers />} />
        <Route
          path="/admin/controler_Products"
          element={<ControlerProducts />}
        />
        
        <Route
          path="/admin/controler_users/new_user"
          element={<FormNewUser />}
        />
        
        <Route
          path="/create_user_admin"
          element={<FormNewUser />}
        />
       
       <Route
          path="/admin/controler_users/edit_user/:name"
          element={<FormEditUser />}
        />
        <Route path="/login" element={<FormValidate />} />
      </Routes>
    </>
  );
};
