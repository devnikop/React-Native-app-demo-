import React from 'react'
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation'

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
    initialRouteName: "Home",
    defaultNavigationOptions: navigationHeaderOptions
  }
)

const AuthStack = createStackNavigator(
  {
    SignIn: SignInScreen
  },
  {
    initialRouteName: "SignIn",
    defaultNavigationOptions: navigationHeaderOptions
  }
)

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: "Auth",
  }
))

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
