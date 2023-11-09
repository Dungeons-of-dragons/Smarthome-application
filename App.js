import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Welcome from './screens/Welcome';
import Signup  from './screens/Signup';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName = 'Welcome'
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown:false
          }}
          />

        <Stack.Screen
          name="Login"  
          component={Login}
          options={{
            headerShown:false
          }}
          />

        <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown:false
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
    
}
