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
import AnimateSequence from './Components/AnimateSequence';
import AnimatedStagger from './Components/AnimatedStagger';

export default class App extends Component<{}> {

  render() {
    return (
      <AnimatedStagger/>
    );
  }
}
