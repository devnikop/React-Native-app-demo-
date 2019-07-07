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

import styles from './styles';

interface Props {
  navigation: Navigation
  onLoginChange: (login: string) => void
}

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>

class Authorization extends React.PureComponent<Props> {
  constructor(props) {
    super(props)

    this._handlerButtonPress = this._handlerButtonPress.bind(this)
    this._handlerLoginChange = this._handlerLoginChange.bind(this)
  }

  render() {
    return (
      <View>
        <Text>Вход</Text>
        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe tempora illo enim nemo aliquid repellat minus obcaecati praesentium! Tempore, illo officiis! In, eos porro! Reprehenderit nobis natus quam perspiciatis aliquid!</Text>
        <TextInput
          onChangeText={this._handlerLoginChange}
          placeholder={`Логин`}
          textContentType="nickname"
        />
        <TextInput
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
    this.props.navigation.navigate("Home")
  }

  _handlerLoginChange(login) {
    this.props.onLoginChange(login)
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
