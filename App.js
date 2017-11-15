/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import AnimatedTiming from './Components/AnimatedTiming';
import AnimatedSpring from './Components/AnimatedSpring';
import DraggableCard from './Components/DraggableCard';
import AnimateColor from './Components/AnimateColor';
import AnimateRotation from './Components/AnimateRotation';

export default class App extends Component<{}> {

  render() {
    return (
      <AnimateRotation/>
    );
  }
}
