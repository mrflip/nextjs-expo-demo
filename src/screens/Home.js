import React from "react"
import { Title, View } from "../elements"
//
import Theme from "../utils/Theme"

function Home() {
  return (
    <View style={Theme.s.container}>
      <Title style={Theme.s.text}>Welcome to Kaiju Wheels</Title>
      <Title>Let's buy a car!</Title>
    </View>
  )
}

export default Home
