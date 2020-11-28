import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Login from './src/scenes/login';
import Register from './src/scenes/register';

class Routes extends Component{
    render() {
        return(
            <Router>
                <Scene key='root'>
                    <Scene key='Login' component={Login} title='Login' initial={true} hideNavBar={true} />
                    <Scene key='Register' component={Register} title='Register' hideNavBar={true} />
                </Scene>
            </Router>
        )
    }

}

export default Routes;