import React, { useState } from 'react';
//import {useNavigate } from "https://cdn.skypack.dev/react-router-dom@6.8.1"
//import {render} from "https://cdn.skypack.dev/react-dom@17.0.1";
import Header from '../components/Header';
import { useNavigate } from "react-router-dom";


const Login = () => { 
  let history=useNavigate();
  let [user, setUser]=useState();  
  let [token, setToken]=useState();
 function auth(e){  
    e.preventDefault();
    //'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.getElementById('form')
  
    // Loop over them and prevent submission
  
        if (!forms.checkValidity()) {
         // e.preventDefault()
          e.stopPropagation()
          forms.classList.add('was-validated')
return
        } 
      
    console.log(user)
    let myHeaders = {};
    myHeaders.append("Content-Type", "application/json");
  
    let raw = JSON.stringify(user);
    
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://pets.сделай.site/api/login", requestOptions)
    .then(response=> response.json())  
    .then(result=>{
      console.log(result)
        if ('data' in result){
        localStorage.token=result.data.token
          setToken(result.data.token)
          localStorage.token=token;
       history('/profile')
          document.getElementById('success').style.display='block'
          document.getElementById('error').style.display='none'
    } else {
    document.getElementById('error').style.display='block'
    document.getElementById('success').style.display='none'
    document.getElementById('validationCustom02').value=''
    }
 }
    )      
    
  }
  return (<div>
    <style
  dangerouslySetInnerHTML={{
    __html:
      "\n            .hh{\n              background-color:  rgb(173, 49, 223);\n              color: aliceblue;\n              text-align: center;\n            }\n        "
  }}
/>   

      <main style={{minHeight: "70vh"}}>
    <h2 className="hh">Аутентификация</h2>
    <div className="p-3">
        <form className="w-50 g-3 m-auto border p-3 needs-validation" style={{minWidth: "300px"}} onSubmit={auth} noValidate id='form'>

        <div className="col-md-4">
    <label htmlFor="validationCustom01" className="form-label">e-mail</label>
    <input type="email" className="form-control" id="validationCustom01" required onChange={(e)=>setUser({...user, email:e.target.value})} />
    <div className="invalid-feedback">
        Пожалуйста, введите адрес электронной почты
      </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustom02" className="form-label">Пароль</label>
    <input type="password" className="form-control" id="validationCustom02" required onChange={(e)=>setUser({...user, password:e.target.value})} />
    <div className="invalid-feedback">
        Пожалуйста, введите пароль
      </div>
  </div>
              <input type="submit" className="btn btn-secondary m-3" value="Войти"/>            
        </form>
        <p className='text-danger text-center' id='error' style={{display:'none'}}>Неправилный адрес электронной почты и e-mail</p>
      <p className='text-success text-center' id='success' style={{display:'none'}}>Вы успешно зарегистрировались, ваш токен: {token}</p>
      <p className='text-center'>e-mail: user@user.ru; Пароль: paSSword1</p>
    </div>

   
    
    </main>
</div>) 
  
}

export default Login;