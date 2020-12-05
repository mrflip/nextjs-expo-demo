import "react-native-gesture-handler"
import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"
//
import HomeScreen from "../src/screens/HomeScreen"
import AboutScreen from "../src/screens/AboutScreen"

const TabNav   = createMaterialBottomTabNavigator()
const StackNav = createStackNavigator()

function Main() {
  return (
    <TabNav.Navigator>
      <TabNav.Screen options={{headerTitle: "hello"}} name="Home" component={HomeScreen} />
      <TabNav.Screen name="About" component={AboutScreen} />
    </TabNav.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNav.Navigator>
        <StackNav.Screen name="Citizenship Quiz" component={Main} />
      </StackNav.Navigator>
    </NavigationContainer>
  )
}
