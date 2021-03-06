import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  Bananas from './Bananas';
import LotsOfGreetings from './Greeting';
import BlinkApp from './Blink';

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>Hello world!</Text>
          <Bananas></Bananas>
          <LotsOfGreetings></LotsOfGreetings>
          <BlinkApp></BlinkApp>
        </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
