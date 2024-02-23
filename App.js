import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/HomeScreen';
import { Gallery } from './screens/Gallery';
import { IMAGES } from './screens/IMAGES';
import { About } from './screens/about';

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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="IMAGES" component={IMAGES} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
