import * as React from 'react';
import { View, Text,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Edge from '../screens/edge'
import Home from '../screens/home'
import Repairing from '../screens/repairing'
import Institute from '../screens/institute'
import Parts from '../screens/part'
import Software from '../screens/software'

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{title:'HOME',headerStyle:{
          backgroundColor:'orange'
        },headerTitle:props=><Image style={{height:70,width:70,resizeMode:"contain"  }} source ={{uri:"https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png"}}/>
        }} name="home" component={Home} />
        <Stack.Screen name="repairing" component={Repairing} />
        <Stack.Screen name="institute" component={Institute} />
        <Stack.Screen name="edge" component={Edge} />
        <Stack.Screen name="software" component={Software} />
        <Stack.Screen name="part" component={Parts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;