import React from "react"
import { StyleSheet, Text, View } from "react-native"

function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Kaiju Wheels</Text>
      <Text>Let's buy a car!</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
})
