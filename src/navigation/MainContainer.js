import "react-native-gesture-handler"
import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"
//
import QuizScreen from "../screens/QuizScreen"
import AboutScreen from "../screens/AboutScreen"
import Theme from "../utils/Theme"

const Tab = createMaterialBottomTabNavigator()
const Stack = createStackNavigator()

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Quiz" options={{ tabBarIcon: Theme.i.quiz }} component={QuizScreen} />
      <Tab.Screen name="About" options={{ tabBarIcon: Theme.i.about }} component={AboutScreen} />
    </Tab.Navigator>
  )
}

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Citizenship Quiz" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
