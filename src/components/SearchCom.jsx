import React from 'react';

const Search = () => {
    return (
        <div>
            <style
  dangerouslySetInnerHTML={{
    __html:
      "\n            .hh{\n              background-color:  rgb(173, 49, 223);\n              color: aliceblue;\n              text-align: center;\n            }\n        "
  }}
/>
<>
  <h2 className="hh">Поиск по объявлениям</h2>
  <div className="p-3">
    <form className="w-50 m-auto border p-3" style={{ minWidth: 300 }}>
      <div className="mb-3">
        <label htmlFor="district" className="form-label">
          Выберите район:
        </label>
        <select id="district" className="form-select">
          <option>Приморский</option>
          <option>Петроградский</option>
          <option>Василиостровский</option>
          <option>Центральный</option>
          <option>Красногвардейский</option>
          <option>Выборгский</option>
          <option>Калининский</option>
          <option>Другой</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Введите вид животного:
        </label>
        <select type="text" id="password" className="form-control">
          <option>Кошка</option>
          <option>Собака</option>
          <option>Рысь</option>
          <option>Хомяк</option>
          <option>Гусеница</option>
          <option>Попугай</option>
          <option>Летучая мышь</option>
          <option>Другое</option>
        </select>
      </div>
      <input type="submit" className="btn btn-dark" defaultValue="Войти" />
    </form>
  </div>
</>

        </div>
    );
};

export default Search;