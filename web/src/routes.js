import { BrowserRouter, Route } from 'react-router-dom';

// pages
import Main from './pages/main';
import Login from './pages/login';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" component={Login} />
            <Route path="/main" component={Main} />
        </BrowserRouter>
    );
}
