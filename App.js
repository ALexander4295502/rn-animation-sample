/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import AnimatedTiming from './Components/AnimatedTiming';
import AnimatedSpring from './Components/AnimatedSpring';
import DraggableCard from './Components/DraggableCard';

export default class App extends Component<{}> {

  render() {
    const animatedStyle = {
      height: this.animatedValue
    };
    return (
      <DraggableCard/>
    );
  }
}
