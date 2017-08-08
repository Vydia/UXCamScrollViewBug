import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, ScrollView, TouchableOpacity, Text } from 'react-native';

export default class UXCamScrollView extends Component {

  render() {
    return (
      <ScrollView
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag"
      >
        <TouchableOpacity onPress={() => {console.log("hi")}}>
          <Text style={{
            width: 50,
            height: 50,
            backgroundColor: '#aaaaaa',
            margin: 20
          }}>Hsi</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('UXCamScrollView', () => UXCamScrollView);
