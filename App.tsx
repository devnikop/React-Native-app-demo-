import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation'

import { Route } from './src/constants'

import { reducer } from './src/reducer/user/user'

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

class App extends React.Component {
  render() {
    const store = createStore(reducer)

    return <Provider store={store}>
      <AppContainer />
    </Provider>
  }
}

export default App
