import "react-native-gesture-handler"
import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
//
import HomeScreen from "../src/screens/HomeScreen"
import AboutScreen from "../src/screens/AboutScreen"

const TabNav = createMaterialBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <TabNav.Navigator>
        <TabNav.Screen name="Home" component={HomeScreen} />
        <TabNav.Screen name="About" component={AboutScreen} />
      </TabNav.Navigator>
    </NavigationContainer>
  )
}
