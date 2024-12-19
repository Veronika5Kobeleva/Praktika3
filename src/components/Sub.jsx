import { useRef, useState } from "react";

const Sub = () => {
  let [mail, setMail] = useState();
  let message = useRef()
  const load = (e) => {
      e.preventDefault();
      let requestOptions = {
          method: 'POST',
          body:new FormData(document.getElementById("sab")),
      };
 
      fetch("https://pets.сделай.site/api/subscription", requestOptions)
      .then(response => response.status)
      .then(result => {
          console.log(result);
          if (result === 204) document.getElementById("message").classList.remove('d-none')
          else document.getElementById("message").classList.add('d-none')
      })
      .catch(error => console.log('error', error));
    }
    return (
        <div>
  <h2 className="text-center text-white bg-secondary m-2"> Подписка на новости</h2>
  <form id="sab" className="w-50 m-auto p-3" style={{ 'minWidth': '300px' }}onSubmit={load}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Введите адрес электронной почты</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" onChange={(e)=>setMail({...mail,email:e.target.value})} />
                    <div id="emailHelp" className="form-text">Мы не делимся Вашими e-mail.</div>
                </div>
                <button type="submit" className="btn btn-dark">Подписаться</button>
            </form>
            <div className="alert  d-none w-50 m-auto p-3 text-black" role="alert" rev={message} id="message">
                Вы успешно подписались на новости!
            </div>
            <pre/>
</div>
    );
};

export default Sub;