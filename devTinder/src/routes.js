import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
    'Unrecognized WebSocket'
]);

// pages
import Login from './pages/login';
import Main from './pages/main';

export default createAppContainer(
    createSwitchNavigator({
        Login,
        Main
    })
); 
