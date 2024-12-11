import React from 'react';
import gusenicsa from '../images/gusenicsa.png';
import fish from '../images/fish.png';


const DobCard2 = () => {
    return (
        <div>
<style
  dangerouslySetInnerHTML={{
    __html:
      "\n    .hh{\n      background-color:  rgb(173, 49, 223);\n      color: aliceblue;\n      text-align: center;\n    }\n    link{\n      background-color:  rgb(173, 49, 223);\n      color: aquamarine;\n    }\n    pon{\n      width: 50px;\n      text-wrap: pretty;\n      min-width: 250px;\n      color: rgb(173, 49, 223);\n    }\n    .card{\ntext-align: right;\n    }\n    .container {\n    width: 960px;\n    margin: 0 auto;\n    margin-left: 20px;\n    margin-right: 20px;\n    display: block;\n    width: 90%;\n    justify-content: space-between;\n}\n.link-purple {\n  color: rgb(173, 49, 223);\n}\n.link-purple:hover, .link-purple:focus {\n  color: rgb(173, 49, 223);\n}\n  "
  }}
/>
  <h2 className="hh">Добавленные объявления</h2>
  <div className="d-flex flex-row flex-wrap">
    <div
      className="d-flex flex-row flex-wrap border m-3 p-3 w-40 m-auto"
      style={{ minWidth: 300, width: "45%" }}
    >
      <img
       src={fish}
        className="w-75 d-block mx-auto"
        alt="рисунок животного"
      />
      <p className="w-50 text-dark" style={{ minWidth: 250 }}>
        id:
      </p>
      <p className="w-50 text-secondary" style={{ minWidth: 250 }}>
        08
      </p>
      <p className="w-50 text-dark" style={{ minWidth: 250 }}>
        Вид животного:
      </p>
      <p className="w-50 text-secondary" style={{ minWidth: 250 }}>
        {" "}
        Кошка
      </p>
      <p className="w-50 text-dark" style={{ minWidth: 300 }}>
        Описание:
      </p>
      <p className="w-50 text-secondary" style={{ minWidth: 300 }}>
        Потерялась кошка, последний раз видели в здании Московского вокзала г.
        Санкт-Петербург. Кошка пушистая, серая.
      </p>
      <p className="w-50 text-dark" style={{ minWidth: 300 }}>
        Номер чипа:
      </p>
      <p className="w-50 text-secondary" style={{ minWidth: 300 }}>
        ca-001-spb
      </p>
      <p className="w-50 text-dark" style={{ minWidth: 300 }}>
        Район:
      </p>
      <p className="w-50 text-secondary" style={{ minWidth: 300 }}>
        Василуостровский
      </p>
      <p className="w-50 text-dark" style={{ minWidth: 300 }}>
        Дата:
      </p>
      <p className="w-50 text-secondary" style={{ minWidth: 300 }}>
        24-03-2020
      </p>
      <div
        className="position-absolute text-danger"
        style={{ top: 15, right: 15, cursor: "pointer" }}
      >
        
      </div>
      <button type="submit" className="btn btn-dark">
        Редактировать объявление
      </button>
    </div>
    <div
      className="d-flex flex-row flex-wrap border m-3 p-3 m-auto"
      style={{ minWidth: 300, width: "45%" }}
    >
      <img
         src={gusenicsa}
        className="w-75 d-block mx-auto"
        alt="рисунок животного"
      />
      <p className="w-50 text-dark" style={{ minWidth: 250 }}>
        id:
      </p>
      <p className="w-50 text-secondary" style={{ minWidth: 250 }}>
        67
      </p>
      <p className="w-50 text-dark" style={{ minWidth: 250 }}>
        Вид животного:
      </p>
      <p className="w-50 text-secondary" style={{ minWidth: 250 }}>
        Гусеница
      </p>
      <p className="w-50 text-dark" style={{ minWidth: 300 }}>
        Описание:
      </p>
      <p className="w-50 text-secondary" style={{ minWidth: 300 }}>
        Потерялась гусеница, последний раз видели в магазине "О'кей" г.
        Санкт-Петербург. Гусеница зеленая, меховая.
      </p>
      <p className="w-50 text-dark" style={{ minWidth: 300 }}>
        Номер чипа:
      </p>
      <p className="w-50 text-secondary" style={{ minWidth: 300 }}>
        mf-016-spb
      </p>
      <p className="w-50 text-dark" style={{ minWidth: 300 }}>
        Район:
      </p>
      <p className="w-50 text-secondary" style={{ minWidth: 300 }}>
        Центральный
      </p>
      <p className="w-50 text-dark" style={{ minWidth: 300 }}>
        Дата:
      </p>
      <p className="w-50 text-secondary" style={{ minWidth: 300 }}>
        26-01-2022
      </p>
      <div
        className="position-absolute text-danger"
        style={{ top: 15, right: 15, cursor: "pointer" }}
      >
        
      </div>
      <button type="submit" className="btn btn-dark">
        Редактировать объявление
      </button>
    </div>
  </div>
  <nav aria-label="Page navigation example" className="m-3">
    <ul className="pagination">
      <li className="page-item">
        <a className="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">«</span>
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          1
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          2
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          3
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">»</span>
        </a>
      </li>
    </ul>
  </nav>
      </div>
    );
};

export default DobCard2;