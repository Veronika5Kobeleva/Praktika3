import React from 'react';

const ChangeNumber = () => {
    return (
        <div>
<>
<style
  dangerouslySetInnerHTML={{
    __html:
      "\n    .hh{\n      background-color:  rgb(173, 49, 223);\n      color: aliceblue;\n      text-align: center;\n    }\n    link{\n      background-color:  rgb(173, 49, 223);\n      color: aquamarine;\n    }\n    pon{\n      width: 50px;\n      text-wrap: pretty;\n      min-width: 250px;\n      color: rgb(173, 49, 223);\n    }\n    .card{\ntext-align: right;\n    }\n    .container {\n    width: 960px;\n    margin: 0 auto;\n    margin-left: 20px;\n    margin-right: 20px;\n    display: block;\n    width: 90%;\n    justify-content: space-between;\n}\n.link-purple {\n  color: rgb(173, 49, 223);\n}\n.link-purple:hover, .link-purple:focus {\n  color: rgb(173, 49, 223);\n}\n  "
  }}
/>
  <h2 className="hh">Изменить номер телефона</h2>
  <form className="w-50 m-auto p-3" style={{ minWidth: 300 }}>
    <div className="mb-3">
      <label htmlFor="phone" className="form-label">
        Введите номер телефона
      </label>
      <input
        type="tel"
        className="form-control"
        id="phone"
        aria-describedby="emailHelp"
      />
      <div className="form-text">Используйте цифры, +, -.</div>
    </div>
    <button type="submit" className="btn btn-dark">
      Отправить
    </button>
  </form>
      </>
               
      </div>
    );
};

export default ChangeNumber;