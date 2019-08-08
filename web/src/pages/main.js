import React, { useEffect, useState } from 'react';
import './main.css';

import API from '../services/API';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import deslike from '../assets/dislike.svg';

export default function Main({ match }) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async function loadUsers() {
            const response = await API.get('/devs', {
                headers: {
                    user: match.params.id
                }
            });
            setUsers(response.data);
        })();
    }, [match.params.id])

    return (
        <div className='main-container'>
            <img src={logo} alt='Tindev' />
            <ul>
                { 
                    users.map(e => 
                      <li key={e._id}>
                        <img src={e.avatar} alt="Tindev" />
                        <footer>
                          <strong>{e.user}</strong>
                          <p>{e.bio}</p>
                        </footer>
  
                        <div className="buttons">
                            <button type="button">
                              <img src={like} alt="like"/>
                            </button>
                            <button type="button">
                                    <img src={deslike} alt="deslike"/>
                                </button>
                            </div>
                      </li> 
                    ) 
                }
            </ul>
        </div>
    );
}
