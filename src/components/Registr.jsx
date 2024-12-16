import React from 'react';

const Registr = () => {
    return (
        <div>
<style
  dangerouslySetInnerHTML={{
    __html:
      "\n            .hh{\n              background-color:  rgb(173, 49, 223);\n              color: aliceblue;\n              text-align: center;\n            }\n        "
  }}
/>

            <main style={{ minHeight: "70vh" }}>
  <h2 className="hh">Регистрация</h2>
  <div className="p-3">
    <form className="w-50 m-auto border p-3" style={{ minWidth: 300 }}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Введите имя:
        </label>
        <input type="text" className="form-control" id="name" />
        <div id="emailHelp1" className="form-text">
          Используйте кириллические буквы
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Введите свой телефон:
        </label>
        <input type="tel" className="form-control" id="phone" />
        <div className="form-text">Используйте цифры, +, -.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Введите адрес электронной почты
        </label>
        <input type="email" className="form-control" id="email" />
        <div className="form-text">
          Мы никогда не делимся Вашими e-mail ни с кем.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Введите пароль:
        </label>
        <input type="password" className="form-control" id="password" />
        <div className="form-text">
          Не менее 7 символов, обязательно: 1 - цифра, 1 - строчная буква, 1 -
          заглавная буква
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="confirm_password" className="form-label">
          Повторите пароль:
        </label>
        <input type="password" className="form-control" id="confirm_password" />
        <div className="form-text" />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="check" />
        <label className="form-check-label" htmlFor="check">
          Согласие на обработку персональных данных
        </label>
      </div>
      <input
        type="submit"
        className="btn btn-dark"
        defaultValue="Зарегистрироваться"
      />
    </form>
  </div>
</main>
        </div>
    );
};

export default Registr;