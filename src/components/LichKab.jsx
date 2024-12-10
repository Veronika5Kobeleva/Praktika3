import React from 'react';

const LichKab = () => {
    return (
        <div>
<>
<style
  dangerouslySetInnerHTML={{
    __html:
      "\n    .hh{\n      background-color:  rgb(173, 49, 223);\n      color: aliceblue;\n      text-align: center;\n    }\n    link{\n      background-color:  rgb(173, 49, 223);\n      color: aquamarine;\n    }\n    pon{\n      width: 50px;\n      text-wrap: pretty;\n      min-width: 250px;\n      color: rgb(173, 49, 223);\n    }\n    .card{\ntext-align: right;\n    }\n    .container {\n    width: 960px;\n    margin: 0 auto;\n    margin-left: 20px;\n    margin-right: 20px;\n    display: block;\n    width: 90%;\n    justify-content: space-between;\n}\n.link-purple {\n  color: rgb(173, 49, 223);\n}\n.link-purple:hover, .link-purple:focus {\n  color: rgb(173, 49, 223);\n}\n  "
  }}
/>

        <h2 className="hh">Личный кабинет</h2>
        <div className="p-3">
          <div
            className="d-flex flex-row flex-wrap border m-auto p-3 w-50"
            style={{ minWidth: 300 }}
          >
            <p className="w-50 text-dark" style={{ minWidth: 250 }}>
              id:
            </p>
            <p className="w-50 text-secondary" style={{ minWidth: 250 }}>
              14
            </p>
            <p className="w-50 text-dark" style={{ minWidth: 250 }}>
              Телефон:
            </p>
            <p className="w-50 text-secondary" style={{ minWidth: 250 }}>
              +7-911-456-78-78
            </p>
            <p className="w-50 text-dark" style={{ minWidth: 300 }}>
              email:
            </p>
            <p className="w-50 text-secondary" style={{ minWidth: 300 }}>
              nika@gmail.com
            </p>
            <p className="w-50 text-dark" style={{ minWidth: 300 }}>
              Имя:
            </p>
            <p className="w-50 text-secondary" style={{ minWidth: 300 }}>
              Вероника
            </p>
            <p className="w-50 text-dark" style={{ minWidth: 300 }}>
              Дата регистрации:
            </p>
            <p className="w-50 text-secondary" style={{ minWidth: 300 }}>
              26-06-2015
            </p>
            <p className="w-50 text-dark" style={{ minWidth: 300 }}>
              Количество найденных животных:
            </p>
            <p className="w-50 text-secondary" style={{ minWidth: 300 }}>
              2
            </p>
            <p className="w-50 text-dark" style={{ minWidth: 300 }}>
              Количество объявлений:
            </p>
            <p className="w-50 text-secondary" style={{ minWidth: 300 }}>
              6
            </p>
          </div>
        </div>
      </>
               
      </div>
    );
};

export default LichKab;