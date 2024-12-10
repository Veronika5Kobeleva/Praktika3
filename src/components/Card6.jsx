import React from 'react';
import fish from '../images/fish.png';
import rusi from '../images/rusi.png';
import homa from '../images/homa.png';
import pug from '../images/pug.png';
import gusenicsa from '../images/gusenicsa.png';
import popug from '../images/popug.png';


const Card6 = () => {
    return (
        <>
<style
  dangerouslySetInnerHTML={{
    __html:
      "\n    .hh{\n      background-color:  rgb(173, 49, 223);\n      color: aliceblue;\n      text-align: center;\n    }\n    link{\n      background-color:  rgb(173, 49, 223);\n      color: aquamarine;\n    }\n    pon{\n      width: 50px;\n      text-wrap: pretty;\n      min-width: 250px;\n      color: rgb(173, 49, 223);\n    }\n    .card{\ntext-align: right;\n    }\n    .container {\n    width: 960px;\n    margin: 0 auto;\n    margin-left: 20px;\n    margin-right: 20px;\n    display: block;\n    width: 90%;\n    justify-content: space-between;\n}\n.link-purple {\n  color: rgb(173, 49, 223);\n}\n.link-purple:hover, .link-purple:focus {\n  color: rgb(173, 49, 223);\n}\n  "
  }}
/>

       <h2 className="hh">Карточки потерянных животных</h2>
        <div className="d-flex flex-row flex-wrap">
          <div
            className="d-flex flex-row flex-wrap border m-3 p-3 w-40 m-auto"
            style={{ minWidth: 150, width: "30%" }}
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
              Василеостровский
            </p>
            <p className="w-50 text-dark" style={{ minWidth: 300 }}>
              Дата:
            </p>
            <p className="w-50 text-secondary" style={{ minWidth: 300 }}>
              24-03-2020
            </p>
          </div>
          <div
            className="d-flex flex-row flex-wrap border m-3 p-3 w-40 m-auto"
            style={{ minWidth: 150, width: "30%" }}
          >
            <img
              src={rusi}
              className="w-75 d-block mx-auto"
              alt="рисунок животного"
            />
            <p className="w-50 text-dark" style={{ minWidth: 250 }}>
              id:
            </p>
            <p className="w-50 text-secondary" style={{ minWidth: 250 }}>
              18
            </p>
            <p className="w-50 text-dark" style={{ minWidth: 250 }}>
              Вид животного:
            </p>
            <p className="w-50 text-secondary" style={{ minWidth: 250 }}>
              Рысь
            </p>
            <p className="w-50 text-dark" style={{ minWidth: 300 }}>
              Описание:
            </p>
            <p className="w-50 text-secondary" style={{ minWidth: 300 }}>
              Потерялась рысь, последний раз видели в здании Московского вокзала г.
              Санкт-Петербург. Рысь белая, неаполитанская, внебрачная.
            </p>
            <p className="w-50 text-dark" style={{ minWidth: 300 }}>
              Номер чипа:
            </p>
            <p className="w-50 text-secondary" style={{ minWidth: 300 }}>
              go-011-spb
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
              14-03-2022
            </p>
          </div>
          <div
            className="d-flex flex-row flex-wrap border m-3 p-3 w-40 m-auto"
            style={{ minWidth: 150, width: "30%" }}
          >
            <img
              src={homa}
              className="w-75 d-block mx-auto"
              alt="рисунок животного"
            />
            <p className="w-50 text-dark" style={{ minWidth: 250 }}>
              id:
            </p>
            <p className="w-50 text-secondary" style={{ minWidth: 250 }}>
              11
            </p>
            <p className="w-50 text-dark" style={{ minWidth: 250 }}>
              Вид животного:
            </p>
            <p className="w-50 text-secondary" style={{ minWidth: 250 }}>
              Хомяк
            </p>
            <p className="w-50 text-dark" style={{ minWidth: 300 }}>
              Описание:
            </p>
            <p className="w-50 text-secondary" style={{ minWidth: 300 }}>
              Потерялся хомяк, последний раз видели в здании Петербургского
              метрополитена на станции Сенная г. Санкт-Петербург. Хомяк пуховый.
            </p>
            <p className="w-50 text-dark" style={{ minWidth: 300 }}>
              Номер чипа:
            </p>
            <p className="w-50 text-secondary" style={{ minWidth: 300 }}>
              ra-188-spb
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
              17-06-2023
            </p>
          </div>
          <div
            className="d-flex flex-row flex-wrap border m-3 p-3 w-40 m-auto"
            style={{ minWidth: 150, width: "30%" }}
          >
            <img
             src={pug}
              className="w-75 d-block mx-auto"
              alt="рисунок животного"
            />
            <p className="w-50 text-dark" style={{ minWidth: 250 }}>
              id:
            </p>
            <p className="w-50 text-secondary" style={{ minWidth: 250 }}>
              22
            </p>
            <p className="w-50 text-dark" style={{ minWidth: 250 }}>
              Вид животного:
            </p>
            <p className="w-50 text-secondary" style={{ minWidth: 250 }}>
              Собака, мопс
            </p>
            <p className="w-50 text-dark" style={{ minWidth: 300 }}>
              Описание:
            </p>
            <p className="w-50 text-secondary" style={{ minWidth: 300 }}>
              Потерялся мопс, последний раз видели на Будапештской улице г.
              Санкт-Петербург. Мопс, перьевидный.
            </p>
            <p className="w-50 text-dark" style={{ minWidth: 300 }}>
              Номер чипа:
            </p>
            <p className="w-50 text-secondary" style={{ minWidth: 300 }}>
              am-041-spb
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
              31-05-2023
            </p>
          </div>
          <div
            className="d-flex flex-row flex-wrap border m-3 p-3 w-40 m-auto"
            style={{ minWidth: 150, width: "30%" }}
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
          </div>
          <div
            className="d-flex flex-row flex-wrap border m-3 p-3 w-40 m-auto"
            style={{ minWidth: 150, width: "30%" }}
          >
            <img
             src={popug}
              className="w-75 d-block mx-auto"
              alt="рисунок животного"
            />
            <p className="w-50 text-dark" style={{ minWidth: 250 }}>
              id:
            </p>
            <p className="w-50 text-secondary" style={{ minWidth: 250 }}>
              99
            </p>
            <p className="w-50 text-dark" style={{ minWidth: 250 }}>
              Вид животного:
            </p>
            <p className="w-50 text-secondary" style={{ minWidth: 250 }}>
              Попугай
            </p>
            <p className="w-50 text-dark" style={{ minWidth: 300 }}>
              Описание:
            </p>
            <p className="w-50 text-secondary" style={{ minWidth: 300 }}>
              Потерялся попугай, последний раз видели на станции Удельная г.
              Санкт-Петербург. Попугай австралийский.
            </p>
            <p className="w-50 text-dark" style={{ minWidth: 300 }}>
              Номер чипа:
            </p>
            <p className="w-50 text-secondary" style={{ minWidth: 300 }}>
              hx-071-spb
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
              38-08-2024
            </p>
          </div>
        </div>
      </>
      
    );
};

export default Card6;