import React from "react"
import _ from "lodash"
import { TextInput as NTextInput } from "react-native"
import { KeyboardAwareScrollView, Title, List, View, FullWidthOutlineButton, TextInput, Paragraph } from "../elements"
//
import Theme from "../utils/Theme"
import CarModel from "../components/CarModel"
import Questions from "../../data/questions.json"
import { useToggler } from "../utils/hooks"

function AnswerBox({ answers }) {
  return (
    <View>
      {answers.map((answer, idx) => (
        <List.Item key={answer} title={answer}>
          <Paragraph>{JSON.stringify(answers, 0, 2)}</Paragraph>
        </List.Item>
      ))}
    </View>
  )
}

function HomeScreen({ navigation }) {
  const [shown, toggleShown, setShown] = useToggler()
  const [idx, setIdx] = React.useState(0)
  const [guess, setGuess] = React.useState("")
  const textInput = React.useRef(null)
  //
  const nextQuestion = () => {
    setIdx(_.random(0, Questions.length - 1))
    setShown(false)
    setGuess("")
  }
  //console.log("body", textInput)
  //outlined={true} multiline={false}
  const { section, subsection, question, answers } = Questions[idx]
  return (
    <KeyboardAwareScrollView style={{ backgroundColor: "#ccddee" }}>
      <Title>Citizenship Quiz!</Title>
      <Paragraph>{`${section}: ${subsection}`}</Paragraph>
      <Title>
        Question {idx}: {question}
      </Title>

      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        ref={textInput}
        onSubmitEditing={() => setShown(true)}
        onChangeText={setGuess}
        value={guess}
      />

      <FullWidthOutlineButton onPress={toggleShown} title={`${shown ? "Hide" : "Show"} Answers`} />

      {shown && <AnswerBox answers={answers} />}

      <FullWidthOutlineButton onPress={nextQuestion} title="Next Question" />
    </KeyboardAwareScrollView>
  )
}

export default HomeScreen
