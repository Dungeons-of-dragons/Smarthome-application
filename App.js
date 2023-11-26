import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Welcome from './screens/Welcome';
import Info  from './screens/Info';
import { getUser } from './helpers';



const Stack = createNativeStackNavigator()



export default function App() {
  
  const [isLoggedin, setIsLoggedin] = React.useState(false)
  React.useEffect(()=>{
    console.log(isLoggedin)
    const func = async()=>{
      console.log(await getUser())
      setIsLoggedin(await getUser()? true: false)
    }
    func()
  },
  [])

  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName = 'Info'
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
        name="Info"
        component={Info}
        options={{
          headerShown:false
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

}
