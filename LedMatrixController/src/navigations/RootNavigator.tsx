import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../scenes/Home';
import SetMatrix from '../scenes/SetMatrix';
import SetSlidingMatrix from '../scenes/SetSlidingMatrix';
import SetAnimatedMatrix from '../scenes/SetAnimatedMatrix';

const Tab = createBottomTabNavigator();

interface IconFuncProps {focused:boolean, color: string; size: number}

const RootNavigator = ():JSX.Element => (
  <NavigationContainer>
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, color, size }: IconFuncProps): React.ReactNode => (
            <Icon name={`home${focused ? '' : '-outline'}`} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SetMatrix"
        component={SetMatrix}
        options={{
          title: 'Set Matrix',
          tabBarIcon: ({ focused, color, size }: IconFuncProps): React.ReactNode => (
            <Icon name={`image${focused ? '' : '-outline'}`} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SetAnimatedMatrix"
        component={SetAnimatedMatrix}
        options={{
          title: 'Set Animated Matrix',
          tabBarIcon: ({ focused, color, size }: IconFuncProps): React.ReactNode => (
            <Icon name={`film${focused ? '' : '-outline'}`} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SetSlidingMatrix"
        component={SetSlidingMatrix}
        options={{
          title: 'Set Sliding Matrix',
          tabBarIcon: ({ focused, color, size }: IconFuncProps): React.ReactNode => (
            <Icon name={`text${focused ? '' : '-outline'}`} size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
