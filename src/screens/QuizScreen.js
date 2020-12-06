import React /**/ from "react"
import _ from "lodash"
//
import Theme from "../utils/Theme"
import { useToggler } from "../utils/hooks"
import { FullWidthOutlineButton, KeyboardAwareScrollView, Paragraph, StyleSheet, Title, View } from "../elements"
//
import AnswerList from "../components/AnswerList"
import AnswerEntry from "../components/AnswerEntry"
import Questions from "../../data/questions.json"

function randomIndex() {
  return _.random(0, Questions.length - 1)
}

function QuizScreen({ navigation }) {
  const [shown, toggleShown, setShown] = useToggler()
  const [idx, setIdx] = React.useState(randomIndex())
  const [guess, setGuess] = React.useState("")
  const textInput = React.useRef(null)
  const { section, subsection, question, answers } = Questions[idx]
  //
  const nextQuestion = () => {
    setIdx(randomIndex())
    setShown(false)
    setGuess("")
    textInput.current?.focus()
  }
  //
  return (
    <KeyboardAwareScrollView style={styles.mainScroller}>
      <Title>{question}</Title>

      <AnswerEntry
        ref={textInput}
        guess={guess}
        answers={answers}
        setGuess={setGuess}
        onSubmitEditing={() => (shown ? nextQuestion() : setShown(true))}
      />

      <FullWidthOutlineButton onPress={toggleShown} title={shown ? "Hide Answers" : "Show Answers"} />

      {shown && <AnswerList answers={answers} />}

      <FullWidthOutlineButton onPress={nextQuestion} title="Next Question" />

      <View style={Theme.s.centered}>
        <Paragraph style={styles.questionIndexBox}>
          {section}: {subsection} {idx}
        </Paragraph>
      </View>
    </KeyboardAwareScrollView>
  )
}

export default QuizScreen

const styles = StyleSheet.create({
  questionIndexBox: {
    paddingTop: 10,
    paddingBottom: 80,
    fontStyle: "italic",
  },
  mainScroller: {
    backgroundColor: "#ccddee",
    padding: 20,
  },
})
