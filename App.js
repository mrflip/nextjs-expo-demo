// Required only for side effects to shim the node standard library into react-native
import _NodeGlobals from 'node-libs-react-native/globals'
// Re-export the root component from the Next.js website
// as the root component for the native React app.
export { default } from "./src/navigation/MainContainer"
