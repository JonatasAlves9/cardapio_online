import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Table from './Table';
import Request from './Request';
import Cancel from './CancelRequest';
import EndRequest from './EndRequest';

const Stack = createStackNavigator(

);

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="table" component={Table} options={{ headerShown: false }}/>
        <Stack.Screen name="request" component={Request} options={{ headerShown: false }}/>
        <Stack.Screen name="cancel" component={Cancel} options={{ headerShown: false }}/>
        <Stack.Screen name="endRequest" component={EndRequest} options={{ headerShown: false }}/>
        {/* <Stack.Screen options={{ headerShown: false }} name="splash" component={splash} />
        <Stack.Screen options={{ headerShown: false }} name="Info1" component={Info1} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


