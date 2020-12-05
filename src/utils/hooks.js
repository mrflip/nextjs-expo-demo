import React /**/ from "react"
import _ from "lodash"
import { HeaderButton } from "../elements/Buttons"

export const useSelectedIndex = (initial) => {
  const [state, setState] = React.useState(initial)
  const selectedIndex = React.useCallback(() => setState((val) => val))
  return [state, setState, selectedIndex]
}

export const useThing = (initial) => {
  const [state, setState] = React.useState(initial)
  const selectedText = React.useCallback(() => setState((val) => val))
  return [state, setState, selectedText]
}

export const useToggler = (initial) => {
  const [state, setState] = React.useState(initial)
  const toggler = React.useCallback(() => setState((val) => !val))
  return [state, toggler, setState]
}

// return:
//      [counter,
export const useCounter = (initial, { min, max, initFunc = _.identity }) => {
  const counter = React.useCallback((ct, { action, val }) => {
    let count = ct
    switch (action) {
      case "inc":
        count += 1
        break
      case "dec":
        count -= 1
        break
      case "add":
        count += val
        break
      case "set":
        count = val
        break
      case "reset":
        count = initFunc(initial)
        break
      default:
        throw new Error(`Unexpected action '${action}' in counter reducer`)
    }
    return _.clamp(count, min, max)
  })
  return React.useReducer(counter, initial, initFunc)
}

export const useNavigator = (navigation, dest, params = {}) =>
  React.useCallback(() => {
    navigation.navigate(dest, params)
  }, [navigation, dest, params])

export const useNavigationOptions = (navigation, options = {}, deps = []) => {
  React.useLayoutEffect(() => {
    navigation.setOptions(options)
  }, [navigation, ...deps])
}

export const useCancelNav = (navigation, options = {}, deps = []) => {
  React.useLayoutEffect(() => {
    const onPress = () => {
      try {
        navigation.goBack()
      } catch (error) {
        /**/
      }
    }
    navigation.setOptions({
      headerRight: () => <HeaderButton title="CANCEL" onPress={onPress} />,
      ...options,
    })
  }, [navigation, ...deps])
}

export const useCreateNav = (navigation, { path, ...options }, deps = []) => {
  React.useLayoutEffect(() => {
    const onPress = () => {
      try {
        navigation.navigate(path)
      } catch (error) {
        /**/
      }
    }
    navigation.setOptions({
      headerRight: () => <HeaderButton title="NEW" onPress={onPress} />,
      ...options,
    })
  }, [navigation, ...deps])
}

export const useEditNav = (navigation, { inst, path, title, ...options }, deps = []) => {
  React.useLayoutEffect(() => {
    const onPress = () => {
      try {
        navigation.navigate(path, { id: inst.id })
      } catch (error) {
        /**/
      }
    }
    const navOptions = {
      headerRight: () => <HeaderButton title="EDIT" onPress={onPress} />,
      ...options,
    }
    if (title) {
      navOptions.headerTitle = title
    }
    navigation.setOptions(navOptions)
  }, [navigation, path, inst, title, options, ...deps])
}

export default {
  useSelectedIndex,
  useToggler,
  useCounter,
  useNavigator,
  useNavigationOptions,
}
