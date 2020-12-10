import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import AppStack from './src/components/tabsNav';

export default class App extends Component{
  render() {
    return (
        <AppStack /> 
    );
  }
}

AppRegistry.registerComponent('App', () => App);