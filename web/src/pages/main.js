import React from 'react';
import './main.css';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import deslike from '../assets/dislike.svg';

export default function Main({ match }) {
    return (
        <div className='main-container'>
            <img src={logo} alt='Tindev' />
            <ul>
                <li>
                    <img src='https://avatars1.githubusercontent.com/u/41583858?v=4' alt="Tindev" />
                    <footer>
                        <strong>Simplicio Baiano</strong>
                        <p>Programador e cantor de rap</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={like}/>
                        </button>
                        <button type="button">
                            <img src={deslike}/>
                        </button>
                    </div>
                </li>
            </ul>

            <ul>
                <li>
                    <img src='https://avatars1.githubusercontent.com/u/41583858?v=4' alt="Tindev" />
                    <footer>
                        <strong>Simplicio Baiano</strong>
                        <p>Programador e cantor de rap</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={like}/>
                        </button>
                        <button type="button">
                            <img src={deslike}/>
                        </button>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <img src='https://avatars1.githubusercontent.com/u/41583858?v=4' alt="Tindev" />
                    <footer>
                        <strong>Simplicio Baiano</strong>
                        <p>Programador e cantor de rap</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={like}/>
                        </button>
                        <button type="button">
                            <img src={deslike}/>
                        </button>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <img src='https://avatars1.githubusercontent.com/u/41583858?v=4' alt="Tindev" />
                    <footer>
                        <strong>Simplicio Baiano</strong>
                        <p>Programador e cantor de rap</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={like}/>
                        </button>
                        <button type="button">
                            <img src={deslike}/>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    );
}
