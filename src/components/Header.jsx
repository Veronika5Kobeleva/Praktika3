import React from 'react';
import images from '../images/images.png';
import { Link } from 'react-router-dom';


const Header = () => {
    return ( 
      <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="index.html">
            <img src={images} className="w-25 rounded-3" alt="logo" />
          </a> */}
          <Link to={"/"}><img src={images} alt="Logo" className="w-25 rounded-3" /></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={"/"}>
                  Главная
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/authentication"}>
                  Личный кабинет
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/registration"}>
                  Регистрация
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/add_pet"}>
                  Добавить объявление
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/search"}>
                  Поиск по объявлениям
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                list="pets"
                placeholder="Поиск"
                aria-label="Search"
              />
              <button className="btn btn-dark" onclick="">
                Поиск
              </button>
              <datalist id="pets">
                <option value="Кошка"></option>
                <option value="Собака"></option>
                <option value="Рысь"></option>
                <option value="Хомяк"></option>
                <option value="Гусеница"></option>
                <option value="Попугай"></option>
                <option value="Летучая мышь"></option>
              </datalist>
            </form>
          </div>
        </div>
      </nav>
    </header>
    );
};

export default Header;