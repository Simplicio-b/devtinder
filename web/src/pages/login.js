import React from 'react';

import logo from '../assets/logo.svg';
import './login.css';

function Login() {
    return (
        <div className="login-container">
            <form>
                <img src={logo} alt="tinDev" />
                <input placeholder="Digite seu usuario no github" />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Login;
