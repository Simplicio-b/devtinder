import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Link } from 'react-router-dom';
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

    useEffect(() => {
        const socket = io('http://localhost:3333', {
            query: { user: match.params.id }
        });

        socket.on('match', dev => {
            console.log(dev);
        });

    }, [match.params.id])

    async function handleLike(id) {
        API.post(`/devs/${id}/likes`, null, {
            headers: { user: match.params.id },  
        });

        setUsers(users.filter(e => e._id !== id));
    }

    async function handleDeslike(id) {
        API.post(`/devs/${id}/deslikes`, null, {
            headers: { user: match.params.id },  
        });
    
        setUsers(users.filter(e => e._id !== id));
    }

    return (
        <div className='main-container'>
            <Link to="/">
                <img src={logo} alt='Tindev' />
            </Link>
            { users.length > 0 ? 
                <ul>
                {users.map(e => 
                        <li key={e._id}>
                          <img src={e.avatar} alt="Tindev" />
                          <footer>
                            <strong>{e.user}</strong>
                            <p>{e.bio}</p>
                          </footer>
    
                          <div className="buttons">
                              <button type="button" onClick={() => handleLike(e._id)}>
                                <img src={like} alt="like"/>
                              </button>
                              <button type="button" onClick={() => handleDeslike(e._id)}>
                                  <img src={deslike} alt="deslike"/>
                              </button>
                          </div>
                        </li> 
                        )} 
                </ul>
                :
                <div className="empty">
                    Acabou :(
                </div>
            }
        </div>
    );
}
