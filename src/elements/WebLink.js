import React /**/ from "react"
import { Text } from "react-native-paper"
import * as Linking from "expo-linking"
import * as WebBrowser from "expo-web-browser"
//
import { Theme } from "../utils/Theme"
import { FullWidthOutlineButton } from "./Buttons"

export const openBrowser = (url) => WebBrowser.openBrowserAsync(url)

export const openSimpleLink = (url) => {
  Linking.openURL(url)
}

export const WebLink = ({ url, style, ...props }) => (
  <Text onPress={() => openBrowser(url)} accessibilityRole="link" style={[{ color: theme.colors.link }, style]} {...props} />
)

export const Anchor = ({ url, style, ...props }) => (
  <Text
    onPress={() => {
      openSimpleLink(url)
    }}
    accessibilityRole="link"
    style={[{ color: Theme.colors.link }, style]}
    {...props}
  />
)

export const BrowserLinkButton = ({ url, ...props }) => (
  <FullWidthOutlineButton onPress={() => openBrowser(url)} {...props} />
)

export const SimpleLinkButton = ({ url, ...props }) => (
  <FullWidthOutlineButton onPress={() => openSimpleLink(url)} {...props} />
)
