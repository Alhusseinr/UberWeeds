import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Login from './src/scenes/login';
import Register from './src/scenes/register';
import dispensaryList from './src/scenes/dispensaryList';

class Routes extends Component{
    render() {
        return(
            <Router>
                <Scene key='root'>
                    <Scene key='Login' component={Login} title='Login' initial={true} hideNavBar={true} />
                    <Scene key='Register' component={Register} title='Register' hideNavBar={true} />
                    <Scene key="Dispensaries" component={dispensaryList} title='Dispensary List' />
                </Scene>
            </Router>
        )
    }

}

export default Routes;