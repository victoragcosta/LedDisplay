import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import Home from '../scenes/Home';

const Stack = createStackNavigator();

const RootNavigator = ():JSX.Element => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Welcome' }}
      />
      {/* <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Welcome' }}
      /> */}
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
