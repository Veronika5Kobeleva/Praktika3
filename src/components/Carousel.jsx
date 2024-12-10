import React from 'react';
import cat from '../images/cat.png';
import mouse from '../images/mouse 1.png';
import krolik from '../images/krolik 1.png';


const Header = () => {
    return ( 
        <div>
<style
  dangerouslySetInnerHTML={{
    __html:
      "\n    .hh{\n      background-color:  rgb(173, 49, 223);\n      color: aliceblue;\n      text-align: center;\n    }\n    link{\n      background-color:  rgb(173, 49, 223);\n      color: aquamarine;\n    }\n    pon{\n      width: 50px;\n      text-wrap: pretty;\n      min-width: 250px;\n      color: rgb(173, 49, 223);\n    }\n    .card{\ntext-align: right;\n    }\n    .container {\n    width: 960px;\n    margin: 0 auto;\n    margin-left: 20px;\n    margin-right: 20px;\n    display: block;\n    width: 90%;\n    justify-content: space-between;\n}\n.link-purple {\n  color: rgb(173, 49, 223);\n}\n.link-purple:hover, .link-purple:focus {\n  color: rgb(173, 49, 223);\n}\n  "
  }}
/>

<h2 className="hh">Найденные животные</h2>
<br />
  <br />
  <div
    id="carouselExampleIndicators"
    className="carousel slide m-auto bg-dark bg-opacity-25 w-75 p-2"
    data-bs-ride="carousel"
    style={{ minHeight: 400 }}
  >
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={2}
        aria-label="Slide 3"
      />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src={cat}
          className="d-block m-auto"
          alt="Собака"
          style={{ width: 500 }}
        />
        <h2 className="text-center">Найдена кошка</h2>
        <p className="text-center">
          Кошка серая, была утеряна в красногвардейском районе
        </p>
      </div>
      <div className="carousel-item">
        <img
          src={mouse}
          className="d-block m-auto"
          alt="Мышь"
          style={{ width: 500 }}
        />
        <h2 className="text-center">Найдена мышь</h2>
        <p className="text-center">
          Мышь черная, была утеряна в центральном районе
        </p>
      </div>
      <div className="carousel-item">
        <img
          src={krolik}
          className="d-block m-auto"
          alt="Горилла"
          style={{ width: 500 }}
        />
        <h2 className="text-center">Найден кролик</h2>
        <p className="text-center">
          Кролик, был утерян в красногвардейском районе
        </p>
      </div>
    </div>
    <br />
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Предыдущий</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Следующий</span>
    </button>
  </div>
  <>
  <br />
  <br />
</>


 </div>

    );
};

export default Header;