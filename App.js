/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Easing
} from 'react-native';

export default class App extends Component<{}> {

  componentWillMount() {
    this.animatedValue = new Animated.Value(1);
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: .3,
      duration: 1000
    }).start()
  }

  render() {
    const animatedStyle = {
      opacity: this.animatedValue
    };
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]}>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#333',
    width: 100,
    height: 100,
  }
});
