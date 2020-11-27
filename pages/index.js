// @generated: @expo/next-adapter@2.1.5
import React                            from 'react'
import { StyleSheet, Text, View }       from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Expo + Next.js</Text>
      <Text>Would you like to buy a car?</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
})
