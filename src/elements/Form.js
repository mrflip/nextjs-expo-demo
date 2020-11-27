import { RadioButton } from "react-native-paper"

export function Radio({ name, choice, setChoice }) {
  return <RadioButton value={name} status={choice === name ? "checked" : "unchecked"} onPress={() => setChoice(name)} />
}
