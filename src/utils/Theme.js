import React from "react"
import { StyleSheet } from "react-native"
import { DefaultTheme } from "react-native-paper"

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centered: {
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
})

const colors = {
  ...DefaultTheme.colors,
  primary: /**/ "#009B4F",
  accent: "#22824C",
  background: "#F5F7F5",
  surface: "#FFF",
  text: "#222222",
  error: "#FF3B30", // f44336 android
  disabled: "#BEC6C6",
  placeholder: "#747874",
  backdrop: "rgba(255,255,255,0.9)",
  tableHeader: "#fafafa",
  link: "#2e78b7",
  submit: "#3c7175",
  highlight: "#FFEC15",
  quiet: "#9c9",
  green0: "#007C4F",
  green1: "#33AF72",
  green2: "#66C395",
  green3: "#99D7B9",
  green4: "#CCEBDC",
  green5: "#DFF3EB",
  grey0: "#393e42",
  grey1: "#43484d",
  grey2: "#5e6977",
  grey3: "#86939e",
  grey4: "#bdc6cf",
  grey5: "#EAECEA",
  greyOutline: "#bbb",
  searchBg: "#303337",
  clear: "rgba(255,255,255,0)",
}

const icons = {
  about: "information",
  home: "home",
  quiz: "comment-question",
  // home:                 "home",
}

export const Theme = {
  ...DefaultTheme,
  c: colors,
  colors,
  s: styles,
  styles,
  i: icons,
  icons,
  // roundness:            8,
  // IconNames,
  // i:                    IconNames,
  // getIcon:              (name) => (theme.IconNames[name] || 'border-none-variant'),
}

export default Theme
