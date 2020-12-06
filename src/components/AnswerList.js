import React /**/ from "react"
//
import { Paragraph, View, StyleSheet } from "../elements"

export default function AnswerList({ answers }) {
  return (
    <View style={styles.answersContainer}>
      {answers.map((answer, idx) => (
        <Paragraph key={answer} style={styles.answerStyle}>
          &#8226; {answer}
        </Paragraph>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  answersContainer: {
    paddingHorizontal: 16,
  },
  answerStyle: {
    fontSize: 18,
    marginVertical: 15,
  },
})
