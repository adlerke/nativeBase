import React from 'react';
import { TouchableOpacity, Button, SafeAreaView, StyleSheet, Text } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoginScreen from './pages/LoginScreen';
import DashboardScreen from './pages/DashboardScreen';
import LoadingScreen from './pages/LoadingScreen';

import * as firebase from 'firebase';
import { firebaseConfig } from './config';
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {


    return (
      <SafeAreaView style={styles.container}>
        <AppNavigator />
      </SafeAreaView>
    );
  }
}
const AppSwitchNavigator = createSwitchNavigator({

  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen
});
const AppNavigator = createAppContainer(AppSwitchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Verdana'
  },
});
