import React from 'react'
import { connect } from 'react-redux'
import {
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'
import {
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation'

import {
  PageHeader,
  Route,
} from '../../constants'

import { ActionCreator } from '../../reducer/user/user'

import style from './styles'

import Header from '../header/header'

interface Props {
  navigation: Navigation,
  userLogout: () => void,
}

interface NavigationParams {
  description: string,
  title: string,
}

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>

class ArticlePage extends React.PureComponent<Props> {
  constructor(props) {
    super(props)

    this._handlerBackButtonPress = this._handlerBackButtonPress.bind(this)
    this._handlerSignOffPress = this._handlerSignOffPress.bind(this)
  }

  render() {
    const {
      navigation
    } = this.props

    const {
      title,
      description
    } = navigation.state.params

    return (
      <View style={style.info}>
        <ScrollView style={style.articleWrapper}>
          <Text style={style.infoTitle}>{title}</Text>
          <Text style={style.infoDescription}>{description}</Text>
        </ScrollView>
        <View style={style.buttonsWrapper}>
          <TouchableHighlight
            onPress={this._handlerBackButtonPress}
            style={style.button}
          >
            <Text style={style.buttonText}>
              Назад
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={this._handlerSignOffPress}
            style={[style.button, style.buttonExit]}
          >
            <Text style={[style.buttonText, style.buttonExitText]}>
              Выйти из аккаунта
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }

  _handlerBackButtonPress() {
    this.props.navigation.goBack()
  }

  _handlerSignOffPress() {
    const {
      navigation,
      userLogout,
    } = this.props

    userLogout()
    navigation.navigate(Route.AUTHORIZATION)
  }

  static navigationOptions = {
    title: PageHeader.DETAILS,
    headerRight: <Header />
  }
}

const mapDispatchToProps = (dispatch) => ({
  userLogout: () => {
    dispatch(ActionCreator.userLogout())
  }
})

export default connect(null, mapDispatchToProps)(ArticlePage)
