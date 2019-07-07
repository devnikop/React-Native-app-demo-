import React from 'react'
import {
  createAppContainer,
  createStackNavigator
} from 'react-navigation'

import Authorization from './src/components/authorization/authorization'
import Info from './src/components/info/info'
import NameList from './src/components/name-list/name-list'

const AppNagigator = createStackNavigator(
  {
    Authorization: Authorization,
    Details: Info,
    Home: NameList,
  },
  {
    initialRouteName: "Authorization",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#BB0D02",
      },
      headerTintColor: "#FFFFFF",
      headerTitleStyle: {
        fontWeight: "bold",
      }
    }
  }
)

const AppContainer = createAppContainer(AppNagigator)

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
