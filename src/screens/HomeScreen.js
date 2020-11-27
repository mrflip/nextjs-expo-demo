import React from "react"
import { Title, View, Button } from "../elements"
//
import Theme from "../utils/Theme"
import CarModel from '../components/CarModel'

function HomeScreen({ navigation }) {
  return (
    <View style={Theme.s.container}>
      <Title>Welcome to Kaiju Wheels</Title>
      <Title>Let's buy a car!</Title>
      <Button
      onPress={() => navigation.navigate('About')}
      >VROOM</Button>

<CarModel />
    </View>
  )
}

export default HomeScreen
