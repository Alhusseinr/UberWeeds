import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Routes from './routes.js';

export default class App extends Component{
  render() {
    return (
      <Routes />
    );
  }
}

AppRegistry.registerComponent('App', () => App);