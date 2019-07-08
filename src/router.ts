import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation'

import { Route } from './constants'

import withAuthorization from './hocs/with-authorization/with-authorization'

import ArticleList from './components/article-list/article-list'
import ArticlePage from './components/article-page/article-page'
import Authorization from './components/authorization/authorization'

const AuthorizationWrapped = withAuthorization(Authorization)

const AppStack = createStackNavigator(
  {
    [Route.DETAILS]: ArticlePage,
    [Route.HOME]: ArticleList,
  },
  {
    initialRouteName: Route.HOME,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#BB0D02",
      },
      headerTintColor: "#FFFFFF",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }
  }
)

const AuthStack = createStackNavigator(
  {
    [Route.AUTHORIZATION]: AuthorizationWrapped
  },
  {
    initialRouteName: Route.AUTHORIZATION,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#BB0D02",
      },
      headerTintColor: "#FFFFFF",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }
  }
)

const AppRouter = createAppContainer(createSwitchNavigator(
  {
    [Route.APP_STACK]: AppStack,
    [Route.AUTH_STACK]: AuthStack,
  },
  {
    initialRouteName: Route.AUTH_STACK,
  }
))

export default AppRouter
