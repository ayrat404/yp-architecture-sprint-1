import React from 'react';
import { Route, Link } from 'react-router-dom';

// В корневом компоненте App описаны обработчики: onRegister, onLogin и onSignOut. Эти обработчики переданы в соответствующие компоненты: Register.js, Login.js, Header.js
function Auth ({onSignOut, email }) {
  function handleSignOut(){
    onSignOut();
  }
  return (
      <div>
          <Route exact path="/">
              <div className="header__wrapper">
                  <p className="header__user">{email}</p>
                  <button className="header__logout" onClick={handleSignOut}>Выйти</button>
              </div>
          </Route>
          <Route path="/signup">
              <Link className="header__auth-link" to="signin">Войти</Link>
          </Route>
          <Route path="/signin">
              <Link className="header__auth-link" to="signup">Регистрация</Link>
          </Route>
      </div>
  )
}

export default Auth;
