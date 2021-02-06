import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from './firebase';
import Login from './components/login';
import SignUp from './components/signup';
import DonorData from './components/donorData';
import GetMap from "./components/GetMap";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="DonorData">
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login"  component={Login} />
      <Stack.Screen name="DonorData" component={DonorData} />
      <Stack.Screen name="GetMap" component={GetMap} />
    </Stack.Navigator>
  </NavigationContainer>  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
