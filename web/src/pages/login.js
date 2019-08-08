import React, { useState } from 'react';
import './login.css';

import API from '../services/API';

import logo from '../assets/logo.svg';

export default function Login({ history }) {

    const [username, setUsername] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        
        const response = await API.post('/devs', {
            username
        });

        const { _id } = response.data;

        history.push(`/dev/${_id}`);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="tinDev" />
                <input 
                    placeholder="Digite seu usuario no github" 
                    value={username}    
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
