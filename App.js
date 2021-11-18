import * as React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Screens/Home";
import Details from './Screens/Details'
import TakeOut from './Screens/TakeOut'

export default function App() {

  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };
  
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen name="Delievery" component={Home} />
          <Stack.Screen name="RestaurantDetail" component={Details} /> 
          <Stack.Screen name="Take Out" component={TakeOut} /> 
          {/* <Stack.Screen name="OrderCompleted" component={OrderCompleted} />  */}
        </Stack.Navigator>
      </NavigationContainer>
  );
   
}
