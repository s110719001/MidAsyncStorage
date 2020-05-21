import React from 'react';
import { Image, AsyncStorage } from 'react-native';

import HomeScreen from './Mytabs'
import ChooseScreen from './Choose';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen } from 'expo';
const Stack = createStackNavigator();
const STATE_KEY = 'STATE_KEY';

function Mystack() {
  const [isLoadingComplete, setLoadingComplete] = React.useState();
  const [initialState, setInitialState ] = React.useState();
    
  React.useEffect(() => {
    async function LoadData() {
      try {
        const savedStateString = await AsyncStorage.getItem(STATE_KEY);
        const state = JSON.parse(savedStateString);
        setInitialState(state);
      } catch (error) {
        console.warn(error);
      }finally{
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }
    LoadData();
  }, []);
  if(!isLoadingComplete){
    return null;
  }else{
  return(
    <NavigationContainer 
    initialState={initialState}
    onStateChange={(state) =>
      AsyncStorage.setItem(STATE_KEY, JSON.stringify(state))}
    >
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
    )}}
export default Mystack;