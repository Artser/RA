'use strict';

const AuthForm = function(input) {

  function onSubmit() {
    event.preventDefault();
    const 
      auth = {},
      inputs = event.currentTarget.getElementsByTagName('input');
    if ((input.onAuth) && (typeof(input.onAuth) === 'function')) {
      for(let element of inputs) {
        auth[element.name] = element.value;
      }
    } else {
      return null;
    }
    input.onAuth(auth);
  }

  function onChange() {
    let mask;
    if (event.target.name === 'email') {
      mask = '/[^A-Za-z0-9_\./\-@]/g';
      maskCheck(mask, event.target.value);
    } 
    if (event.target.name === 'password') {
      mask = '/[^A-Za-z0-9_]/g';
      maskCheck(mask, event.target.value);
    }
  }

  function maskCheck(mask, value) {
    if (mask.test(value)) {
      value = value.replace(mask, ''); 
      event.target.value = value; 
    }
  }

  return (
    <form className="ModalForm" action="/404/auth/" method="POST" onSubmit={onSubmit} onChange={onChange}>
      <div className="Input">
        <input 
          required 
          type="text" 
          placeholder="Имя"/>
        <label></label>
      </div>
      <div className="Input">
        <input 
          type="email" 
          placeholder="Электронная почта"/>
        <label></label>
      </div>
      <div className="Input">
        <input 
          required 
          type="password" 
          placeholder="Пароль"/>
        <label></label>
      </div>
      <button type="submit">
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right"></i>
      </button>
    </form>
  );

}