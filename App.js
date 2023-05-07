import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MyStack from './navigation';
import Home from './screens/home';
import Quiz from './screens/quiz';
import Result from './screens/result';

console.log('App.js is RUNNING');
const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});
