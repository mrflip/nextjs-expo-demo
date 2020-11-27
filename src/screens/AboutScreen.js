import React from "react"
import { Paragraph, Title, View, SimpleLinkButton } from "../elements"
//
import Theme from "../utils/Theme"

function AboutScreen() {
  return (
    <View style={Theme.s.container}>
      <Title>Kaiju Wheels: Next.js/Expo Demo App</Title>
      <Paragraph>By Flip Kromer</Paragraph>
      <SimpleLinkButton title="Tookstock.com: Inventory and Purchasing" url="https://tookstock.com" />
    </View>
  )
}

export default AboutScreen
