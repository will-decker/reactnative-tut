import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';


export default class Component2 extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.myView}>
          <Text style={styles.myText}>Hello Will</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.v1}>
            <Text style={styles.textStyle}>View 1</Text>
          </View>
          <View style={styles.v2}>
            <Text style={styles.textStyle}>View 2</Text>
          </View>
          <View style={styles.v3}>
            <Text style={styles.textStyle}>View 3</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    marginTop: 50
  },
  myView: {
    backgroundColor: 'black'
  },
  myText: {
    color: 'green'
  },
  container: {
    flexDirection: 'row',
    height: 100
  },
  v1: {
    flex: 1,
    backgroundColor: 'grey',
    padding: 10
  },
  v2: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 10
  },
  v3: {
    flex: 1,
    backgroundColor: 'purple',
    padding: 10
  },
  textStyle: {
    // color property doesn't work on <View></View>
    color: 'white'
  }
});

AppRegistry.registerComponent('Component2', () => Component2);