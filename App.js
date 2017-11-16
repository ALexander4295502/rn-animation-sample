/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  NavigatorIOS
} from 'react-native';
import MainMenu from "./Components/MainMenu";


export default class App extends Component<{}> {

  render() {
    return (
      <NavigatorIOS
        style={{
          flex: 1
        }}
        initialRoute={{
          title: 'Main Menu',
          component: MainMenu
        }}
        navigationBarHidden={false}
      />
    );
  }
}
