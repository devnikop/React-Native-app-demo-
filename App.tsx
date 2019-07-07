import React from 'react'
import {
  createAppContainer,
  createStackNavigator
} from 'react-navigation'

import NameList from './src/components/name-list/name-list'
import Info from './src/components/info/info'

const AppNagigator = createStackNavigator(
  {
    Home: NameList,
    Details: Info,
  },
  {
    initialRouteName: "Home",
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
