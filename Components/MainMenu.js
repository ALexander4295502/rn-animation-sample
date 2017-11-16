import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';

import AnimatedTiming from './AnimatedTiming';
import AnimatedSpring from './AnimatedSpring';
import DraggableCard from './DraggableCard';
import AnimateColor from './AnimateColor';
import AnimateRotation from './AnimateRotation';
import AnimateSequence from './AnimateSequence';
import AnimatedStagger from './AnimatedStagger';
import AnimatedParallel from './AnimatedParallel';
import FlipCardAnimation from './FlipCardAnimation';


class Option extends Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.animatedValue = new Animated.Value(1);
    this.animateColor = new Animated.Value(0);
  }

  handlePressIn(opt) {
    Animated.parallel([
      Animated.spring(this.animatedValue, {
        toValue: .5,
      }).start(() => {
        switch (opt) {
          case '0':
            this.props.navigator.push({
              component: AnimateColor,
              title: 'Animate Color'
            });
            break;
          case '1':
            this.props.navigator.push({
              component: AnimatedParallel,
              title: 'Animate Parallel'
            });
            break;
          case '2':
            this.props.navigator.push({
              component: AnimatedSpring,
              title: 'Animate Spring'
            });
            break;
          case '3':
            this.props.navigator.push({
              component: AnimatedStagger,
              title: 'Animate Stagger'
            });
            break;
          case '4':
            this.props.navigator.push({
              component: AnimatedTiming,
              title: 'Animate Timing'
            });
            break;
          case '5':
            this.props.navigator.push({
              component: AnimateRotation,
              title: 'Animate Rotation'
            });
            break;
          case '6':
            this.props.navigator.push({
              component: AnimateSequence,
              title: 'Animate Sequence'
            });
            break;
          case '7':
            this.props.navigator.push({
              component: DraggableCard,
              title: 'Draggable Card'
            });
            break;
          case '8':
            this.props.navigator.push({
              component: FlipCardAnimation,
              title: 'Flip Card Animation'
            });
            break;
        }
      }),
      Animated.timing(this.animateColor, {
        toValue: 150,
        duration: 100
      }).start()
    ]);

  }

  handlePressOut() {
    Animated.parallel([
      Animated.spring(this.animatedValue, {
        toValue: 1,
        friction: 3,
        tension: 40
      }).start(),
      Animated.timing(this.animateColor, {
        toValue: 0,
        duration: 100
      }).start()
    ])
  }

  getOptionTitle(index){
    switch (index) {
      case '0':
        return 'Animate Color';
        break;
      case '1':
        return 'Animate Parallel';
        break;
      case '2':
        return 'Animate Spring';
        break;
      case '3':
        return 'Animate Stagger';
        break;
      case '4':
        return 'Animate Timing';
        break;
      case '5':
        return 'Animate Rotation';
        break;
      case '6':
        return 'Animate Sequence';
        break;
      case '7':
        return 'Draggable Card';
        break;
      case '8':
        return 'Flip Card Animation';
        break;
    }
  }

  render(){
    const interpolateColor = this.animateColor.interpolate({
      inputRange: [0, 150],
      outputRange: ['rgb(72, 118, 255)', 'rgb(0, 0, 205)']
    });
    const animatedStyle = {
      transform: [{scale: this.animatedValue}],
      backgroundColor: interpolateColor
    };
    return (
      <Animated.View
        style={[styles.box, animatedStyle]}
      >
        <TouchableWithoutFeedback
          onPressIn={this.handlePressIn.bind(this, this.props.option)}
          onPressOut={this.handlePressOut.bind(this)}
          style={styles.button}
        >
          <View style={styles.textBox}>
            <Text style={styles.text}>{this.getOptionTitle(this.props.option)}</Text>
          </View>
        </TouchableWithoutFeedback>
      </Animated.View>
    );
  }
}

export default class MainMenu extends Component {

  constructor(props){
    super(props);
    this.state = {
      naviBar: false
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Demo for react native animation</Text>
        <Option navigator={this.props.navigator} option='0'/>
        <Option navigator={this.props.navigator} option='1'/>
        <Option navigator={this.props.navigator} option='2'/>
        <Option navigator={this.props.navigator} option='3'/>
        <Option navigator={this.props.navigator} option='4'/>
        <Option navigator={this.props.navigator} option='5'/>
        <Option navigator={this.props.navigator} option='6'/>
        <Option navigator={this.props.navigator} option='7'/>
        <Option navigator={this.props.navigator} option='8'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 15
  },
  button: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: 15,
    color: '#fff'
  },
  textBox: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    height: 25
  }
});
