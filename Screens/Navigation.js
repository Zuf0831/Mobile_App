import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import Startscreen from './startscreen';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import UpdateScreen from './UpdateScreen';
import JobSearchScreen from './JobSearchScreen';
import DetailScreen from './DetailScreen';

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
  };

  const Navigation = () => (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Startscreen"
        screenOptions={screenOptions}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Startscreen" component={Startscreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="UpdateScreen" component={UpdateScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="JobSearchScreen" component={JobSearchScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
  export default Navigation;
  