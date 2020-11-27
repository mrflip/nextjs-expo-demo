import React /**/ from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { Avatar, Button, FAB } from "react-native-paper"
//
import { Theme } from "../utils/Theme"

export const CancelButton = (props) => (
  <Button labelStyle={[styles.cancelButtonText]} mode="outlined" style={[styles.formButton, styles.cancelButton]} {...props}>
    CANCEL
  </Button>
)

export const DangerButton = ({ title, style, ...rest }) => (
  <Button
    labelStyle={[styles.fullWidthOutlineButtonText, styles.dangerContent]}
    mode="outlined"
    style={[styles.fullWidthOutlineButton, styles.dangerButton, style]}
    {...rest}>
    {title}
  </Button>
)

export const Fab = ({ buttonAction, icon, label, style, ...rest }) => (
  <FAB color="#FFF" label={label} icon={icon} style={[styles.fab, style]} onPress={() => buttonAction} {...rest} />
)

export const FormButton = ({ title, style, ...rest }) => (
  <Button labelStyle={styles.formButtonText} mode="contained" style={[styles.formButton, style]} {...rest}>
    {title}
  </Button>
)

export const FullWidthOutlineButton = ({ title, style, ...rest }) => (
  <Button
    labelStyle={styles.fullWidthOutlineButtonText}
    mode="outlined"
    style={[styles.fullWidthOutlineButton, style]}
    {...rest}>
    {title}
  </Button>
)

export const MiniButton = ({ title, style, ...rest }) => (
  <Button labelStyle={styles.miniButtonText} mode="outlined" style={[styles.miniButton, style]} {...rest}>
    {title}
  </Button>
)

export const OutlineButton = ({ icon, style, title, ...rest }) => (
  <Button
    icon={icon}
    labelStyle={[styles.outlineButtonText]}
    mode="outlined"
    style={[styles.outlineButton, style]}
    {...rest}>
    {title}
  </Button>
)

export const OutlineIconButton = ({ buttonAction, icon, style }) => (
  <TouchableOpacity onPress={() => buttonAction()} style={[styles.outlineIconButton, style]}>
    {/* <Icon name={icon} color={theme.colors.primary} /> */}
    <Avatar.Icon color={theme.colors.primary} icon={icon} size={28} style={styles.iconStyle} />
  </TouchableOpacity>
)

export const RoundHoverButton = ({ title, style, labelStyle, ...rest }) => (
  <Button
    labelStyle={labelStyle}
    style={[styles.roundHoverButtonContainer]}
    contentStyle={[styles.roundHoverButton, style]}
    {...rest}>
    {title}
  </Button>
)

export const RoundSolidIconButton = ({ icon, ...rest }) => (
  <TouchableOpacity {...rest}>
    <View style={styles.roundButtonContainer}>
      <Icon color="#FFF" name={icon} />
    </View>
  </TouchableOpacity>
)

export const SolidButton = ({ icon, style, title, ...rest }) => (
  <Button icon={icon} labelStyle={[styles.formButtonText]} mode="contained" style={[styles.solidButton, style]} {...rest}>
    {title}
  </Button>
)

export const HeaderButton = MiniButton

export default {
  FormButton,
  FullWidthOutlineButton,
  HeaderButton,
  MiniButton,
  OutlineButton,
  OutlineIconButton,
  SolidButton,
}

const styles = StyleSheet.create({
  formButton: {
    margin: 16,
    justifyContent: "center",
  },
  cancelButton: {
    marginTop: 0,
  },
  formButtonText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "600",
    padding: 2,
    textTransform: "uppercase",
  },
  cancelButtonText: {
    color: "#966",
    fontSize: 20,
    padding: 2,
  },
  miniButtonText: {
    color: "#009B4F",
  },
  miniButton: {
    marginHorizontal: 8,
    marginVertical: 4,
    justifyContent: "center",
  },
  dangerButton: {
    backgroundColor: "#fee",
    borderColor: Theme.colors.error,
    marginTop: 48,
  },
  dangerContent: {
    color: Theme.colors.error,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 78,
  },
  fullWidthOutlineButton: {
    marginHorizontal: 16,
    marginVertical: 24,
    padding: 4,
    borderWidth: 2,
    borderColor: "#66C395",
  },
  fullWidthOutlineButtonText: {
    fontSize: 16,
  },
  iconStyle: {
    backgroundColor: "#FFF",
  },
  outlineButton: {
    margin: 8,
    justifyContent: "center",
    borderRadius: 2,
    borderColor: Theme.colors.primary,
    borderWidth: 1,
  },
  outlineButtonText: {
    color: Theme.colors.primary,
    fontSize: 14,
    fontWeight: "600",
    padding: 2,
    textTransform: "uppercase",
  },
  outlineIconButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Theme.colors.primary,
  },
  roundButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
    width: 32,
    height: 32,
    borderRadius: 24,
    backgroundColor: Theme.colors.primary,
  },
  roundHoverButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },
  roundHoverButton: {
    width: 48,
    height: 48,
    margin: 0,
    padding: 0,
  },
  solidButton: {
    margin: 8,
    justifyContent: "center",
    borderRadius: 2,
    borderColor: Theme.colors.primary,
    borderWidth: 1,
    backgroundColor: Theme.colors.primary,
  },
})
