import React from 'react';

const Sub = () => {
    return (
        <div>
    
  <h2 className="text-center text-white bg-secondary m-2">
    Подписка на новости
  </h2>
  <form className="w-50 m-auto p-3" style={{ minWidth: 300 }}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        Введите адрес электронной почты
      </label>
      <input
        type="email"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <div id="emailHelp" className="form-text">
        Мы никогда не делимся Вашими e-mail ни с кем.
      </div>
    </div>
    <button type="submit" className="btn btn-dark">
      Подписаться
    </button>
  </form>

</div>
    );
};

export default Sub;