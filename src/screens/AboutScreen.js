import React from "react"
import { Paragraph, Title, View, SimpleLinkButton } from "../elements"
//
import Theme from "../utils/Theme"

function AboutScreen() {
  return (
    <View style={Theme.s.container}>
      <Title>Citizenship Test: Next.js/Expo Demo App</Title>
      <Paragraph>By Flip Kromer</Paragraph>
      <SimpleLinkButton title="Tookstock: Business Simplicity" url="https://tookstock.com" />
    </View>
  )
}

export default AboutScreen
