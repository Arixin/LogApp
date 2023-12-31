import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Home } from './screens';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
        name='Login'
        component={Login}
        options={{
          headerShown:false
        }}
        />
        <Stack.Screen
        name='Home'
        component={Home}
        options={{
          headerShown:false
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

