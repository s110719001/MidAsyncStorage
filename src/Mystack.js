import React from 'react';
import { Image } from 'react-native';

import HomeScreen from './Mytabs'
import ChooseScreen from './Choose';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

function Mystack() {
    return(
    <NavigationContainer >
        <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{headerShown:false}}
            />
            <Stack.Screen
              name="ChooseScreen"
              component={ChooseScreen}
              options={{headerShown:false}}
            />
        </Stack.Navigator>
    </NavigationContainer>
    )}
export default Mystack;