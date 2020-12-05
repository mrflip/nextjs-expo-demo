import React                       /**/ from "react"
import _                                from "lodash"
import { TextInput as NTextInput }      from "react-native"
//
import Theme                            from "../utils/Theme"
import { useToggler }                   from "../utils/hooks"
import {
  CenterContainer, VContainer, Container, FullWidthOutlineButton, HelperText,
  KeyboardAwareScrollView, List, Paragraph, StyleSheet, TextInput,
  Title, View,
}                                       from "../elements"
//
import Questions                        from "../../data/questions.json"

function AnswerBox({ answers }) {
  return (
    <View style={{ paddingHorizontal: 16 }}>
      {answers.map((answer, idx) => (
        <Paragraph key={answer} style={{ fontSize: 18, marginVertical: 15 }}>
           &#8226; {answer}
        </Paragraph>
      ))}
    </View>
  )
}

function randomIndex() {
  return _.random(0, Questions.length - 1)
}

function slugify(str) {
  return str.replace(/\W+/g, '').toLowerCase()
}

function answerStyling(guess, answers) {
  if (answers.some((answer) => (slugify(answer) === slugify(guess)))) {
    return styles.happyInput
  }
  if (guess.length < 3) {
    return {}
  }
  if (answers.some((answer) => (slugify(answer).includes(slugify(guess))))) {
    return styles.goodStart
  }
  return {}
}

function HomeScreen({ navigation }) {
  const [shown, toggleShown, setShown] = useToggler()
  const [idx, setIdx] = React.useState(randomIndex())
  const [guess, setGuess] = React.useState("")
  const textInput = React.useRef(null)
  const { section, subsection, question, answers } = Questions[idx]
  //
  const successStyle = answerStyling(guess, answers)
  //
  const nextQuestion = () => {
    setIdx(randomIndex())
    setShown(false)
    setGuess("")
  }
  //
  return (
    <KeyboardAwareScrollView style={styles.mainScroller}>

      <Title>{question}</Title>

      <View style={styles.answerBox}>
        <HelperText>Answer:</HelperText>
        <TextInput
          style          = {{ ...styles.answerInput, ...successStyle }}
          ref            = {textInput}
          onSubmitEditing= {() => setShown(true)}
          onChangeText   = {setGuess}
          value          = {guess}
        />
      </View>

      <FullWidthOutlineButton
        onPress={toggleShown}
        title={shown ? "Hide Answers" : "Show Answers"}
      />

      {
        shown && (
          <AnswerBox answers={answers} />
        )
      }

      <FullWidthOutlineButton
        onPress={nextQuestion}
        title="Next Question"
      />

      <View style={Theme.s.centered}>
        <Paragraph style={styles.questionIndexBox}>
          {section}: {subsection} {idx}
        </Paragraph>
      </View>

    </KeyboardAwareScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  questionIndexBox: {
    paddingTop:         10,
    paddingBottom:      80,
    fontStyle:          "italic",
  },
  answerBox: {
    marginVertical:     20,
  },
  answerInput: {
    height:             40,
    borderColor:        "gray",
    borderWidth:        1,
  },
  mainScroller: {
    backgroundColor:    "#ccddee",
    padding:            20,
  },
  happyInput: {
    backgroundColor:    "#cceecc",
  },
  goodStart: {
    backgroundColor:    "#eeeecc",
  },
})
