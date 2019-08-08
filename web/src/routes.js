import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// pages
import Main from './pages/main';
import Login from './pages/login';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/dev/:id" component={Main} />
        </BrowserRouter>
    );
}
