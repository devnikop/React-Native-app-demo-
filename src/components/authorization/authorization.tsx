import React from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Text,
  TextInput,
  View,
} from 'react-native'
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation'

import { PageHeader } from '../../constants'

import { ActionCreator } from '../../reducer/user/user'

import styles from './styles'

interface Props {
  navigation: Navigation
  onLoginChange: (login: string) => void
}

interface State {
  isLoginValid: boolean
  isPasswordValid: boolean
  login: string
  password: string
}

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>

class Authorization extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props)

    this.state = {
      isLoginValid: false,
      isPasswordValid: true,
      login: ``,
      password: ``,
    }

    this._handlerButtonPress = this._handlerButtonPress.bind(this)
    this._handlerLoginChange = this._handlerLoginChange.bind(this)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Вход</Text>
        <Text style={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe tempora illo enim nemo aliquid repellat minus obcaecati praesentium! Tempore, illo officiis! In, eos porro! Reprehenderit nobis natus quam perspiciatis aliquid!</Text>
        <TextInput
          onChangeText={this._handlerLoginChange}
          style={styles.textInput}
          placeholder={`Логин`}
          textContentType="nickname"
        />
        <TextInput
          style={styles.textInput}
          placeholder={`Пароль`}
          textContentType="password"
        />
        <Button
          onPress={this._handlerButtonPress}
          title={`Войти`}
        />
      </View>
    )
  }

  _handlerButtonPress() {
    this._isInputsValid()
      ? this.props.navigation.navigate("Home")
      : ``
  }

  _handlerLoginChange(login) {
    this.setState({ login })

    if (login.length > 0) {
      this._setLoginValidity(true)
    }

    this.props.onLoginChange(login)
  }

  _isInputsValid() {
    const {
      isLoginValid,
      isPasswordValid,
    } = this.state

    return (isLoginValid && isPasswordValid)
      ? true
      : false
  }

  _setLoginValidity(bool) {
    this.setState({
      isLoginValid: bool
    })
  }

  static navigationOptions = {
    headerTitle: PageHeader.SIGN_IN,
  }
}

const mapDispatchToProps = (dispatch) => ({
  onLoginChange: (login) => {
    dispatch(ActionCreator.setLogin(login))
  }
})

export default connect(null, mapDispatchToProps)(Authorization)
