import React /**/ from "react"
//
import { HelperText, StyleSheet, TextInput, View } from "../elements"

const AnswerEntry = React.forwardRef(({ answers, guess, onSubmitEditing, setGuess }, ref) => {
  const successStyle = answerStyling(guess, answers)
  return (
    <View style={styles.answerBox}>
      <HelperText>Answer:</HelperText>
      <TextInput
        blurOnSubmit={false}
        style={[styles.answerInput, successStyle]}
        ref={ref}
        onSubmitEditing={onSubmitEditing}
        onChangeText={setGuess}
        value={guess}
      />
    </View>
  )
})

function slugify(str) {
  return str.replace(/\W+/g, "").toLowerCase()
}

function detachAsides(str) {
  return str
    .replace(/^\([^\)]+\)/, "")
    .replace(/\([^\)]+\)$/, "")
    .replace(/^The/i, "")
}

function answerStyling(guess, answers) {
  if (answers.some((answer) => slugify(answer) === slugify(guess))) {
    return styles.happyInput
  }
  if (answers.some((answer) => slugify(guess).includes(slugify(detachAsides(answer))))) {
    return styles.happyInput
  }
  if (guess.length === 0) {
    return {}
  }
  if (answers.some((answer) => slugify(answer).includes(slugify(guess)))) {
    return styles.goodStart
  }
  return {}
}

export default AnswerEntry

const styles = StyleSheet.create({
  answerBox: {
    marginVertical: 20,
  },
  answerInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
  happyInput: {
    backgroundColor: "#cceecc",
  },
  goodStart: {
    backgroundColor: "#eeeecc",
  },
})
