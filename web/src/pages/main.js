import React from 'react';

import logo from '../assets/logo.svg';

export default function Main({ match }) {
    return (
        <div className='main-container'>
            <img src={logo} alt='Tindev' />
            <ul>
                <li>
                    <img src={logo} alt="Tindev" />
                </li>
            </ul>
        </div>
    );
}
