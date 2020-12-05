import "react-native-gesture-handler"
import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"
//
import QuizScreen from "../src/screens/QuizScreen"
import AboutScreen from "../src/screens/AboutScreen"
import Theme from "../src/utils/Theme"

const TabNav = createMaterialBottomTabNavigator()
const StackNav = createStackNavigator()

function Main() {
  return (
    <TabNav.Navigator>
      <TabNav.Screen name="Quiz" options={{ tabBarIcon: Theme.i.quiz }} component={QuizScreen} />
      <TabNav.Screen name="About" options={{ tabBarIcon: Theme.i.about }} component={AboutScreen} />
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
