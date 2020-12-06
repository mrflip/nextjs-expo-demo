// @generated: @expo/next-adapter@2.1.5
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/guides/using-nextjs.md
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const { withExpo } = require("@expo/next-adapter")
const withImages = require("next-images")
const withFonts = require("next-fonts")

// environment varibales for local development
const devCognito = {
  IDP_DOMAIN: "yo.tookstock.com",
  USER_POOL_ID: "us-east-1_ec5pcl7MW",
  USER_POOL_CLIENT_ID: "49vqkss2nsgiggeid0qfvgtst1",
  REDIRECT_SIGN_IN: "http://localhost:3000/token",
  REDIRECT_SIGN_OUT: "http://localhost:3000/",
  AUTH_COOKIE_DOMAIN: "localhost",
}

const prodCognito = {
  IDP_DOMAIN: "yo.tookstock.com",
  USER_POOL_ID: "us-east-1_ec5pcl7MW",
  USER_POOL_CLIENT_ID: "49vqkss2nsgiggeid0qfvgtst1",
  REDIRECT_SIGN_IN: "http://localhost:3000/token",
  REDIRECT_SIGN_OUT: "http://localhost:3000/",
  AUTH_COOKIE_DOMAIN: "localhost",
  // IDP_DOMAIN: "nextjs-example-prod.auth.eu-central-1.amazoncognito.com",
  // USER_POOL_ID: "eu-central-1_p25eoCGW4",
  // USER_POOL_CLIENT_ID: "66hpug32jqnemqg59bha64pvds",
  // REDIRECT_SIGN_IN: "https://aws-cognito-next-example-app.now.sh/token",
  // REDIRECT_SIGN_OUT: "https://aws-cognito-next-example-app.now.sh/",
  // AUTH_COOKIE_DOMAIN: "aws-cognito-next-example-app.now.sh",
}

function nextConfig(phase) {
  const cognito = ((phase === PHASE_DEVELOPMENT_SERVER) ? devCognito : prodCognito)
  return withExpo(
    withFonts(
      withImages({
        projectRoot: __dirname,
        env: {
          ...cognito,
        },
      }),
    ),
  )
}

module.exports = nextConfig
