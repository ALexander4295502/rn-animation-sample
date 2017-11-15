import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';

export default class AnimateSequence extends Component {

  componentWillMount() {
    this.animateValue1 = new Animated.Value(0);
    this.animateValue2 = new Animated.Value(1);
  }

  componentDidMount() {
    Animated.sequence([
      Animated.timing(this.animateValue1, {
        toValue: 150,
        duration: 1000
      }),
      Animated.spring(this.animateValue2, {
        toValue: 3,
      }),
      Animated.timing(this.animateValue1, {
        toValue: 0,
        duration: 1000
      }),
      Animated.spring(this.animateValue2, {
        toValue: .5,
      }),
    ]).start();
  }

  render() {
    const animatedStyle = {
      transform: [
        {translateY: this.animateValue1},
        {scale: this.animateValue2}
      ]
    };
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]} />
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
    width: 100,
    height: 100,
    backgroundColor: '#333'
  }
});