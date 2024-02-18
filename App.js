import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './HomeScreen';
import { IMAGES } from './IMAGES';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        lazy={false}
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} lazy={false}/>
        <Stack.Screen name="IMAGES" component={IMAGES} lazy={false}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
