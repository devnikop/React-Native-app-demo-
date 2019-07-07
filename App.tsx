import React from 'react'
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation'

import { Route } from './src/constants'

import SignInScreen from './src/components/authorization/authorization'
import InfoScreen from './src/components/info/info'
import NameListScreen from './src/components/name-list/name-list'

const navigationHeaderOptions = {
  headerStyle: {
    backgroundColor: "#BB0D02",
  },
  headerTintColor: "#FFFFFF",
  headerTitleStyle: {
    fontWeight: "bold",
  },
}

const AppStack = createStackNavigator(
  {
    Details: InfoScreen,
    Home: NameListScreen,
  },
  {
    initialRouteName: Route.HOME,
    defaultNavigationOptions: navigationHeaderOptions
  }
)

const AuthStack = createStackNavigator(
  {
    SignIn: SignInScreen
  },
  {
    initialRouteName: Route.SIGN_IN,
    defaultNavigationOptions: navigationHeaderOptions
  }
)

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: Route.AUTH,
  }
))

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
