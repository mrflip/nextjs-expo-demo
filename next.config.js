// @generated: @expo/next-adapter@2.1.5
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/guides/using-nextjs.md

const { withExpo } = require("@expo/next-adapter")
const withImages = require("next-images")
const withFonts = require("next-fonts")

module.exports = withExpo(
  withFonts(
    withImages({
      projectRoot: __dirname,
    }),
  ),
)
