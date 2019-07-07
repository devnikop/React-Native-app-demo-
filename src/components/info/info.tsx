import React from 'react'
import {
  Text,
  View,
  Button,
} from 'react-native'
import {
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation'

import style from './styles'

interface Props {
  navigation: Navigation,
}

interface NavigationParams {
  description: string,
  title: string,
}

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>

class Info extends React.PureComponent<Props> {
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
        <Text style={style.infoTitle}>{title}</Text>
        <Text style={style.infoDescription}>{description}</Text>
        <Button
          onPress={this._handlerBackButtonPress}
          title={`Назад`}
        />
        <Button
          onPress={this._handlerSignOffPress}
          title={`Выйти из аккаунта`}
        />
      </View>
    )
  }

  _handlerBackButtonPress() {
    this.props.navigation.goBack()
  }

  _handlerSignOffPress() {
    this.props.navigation.navigate("SignIn")
  }

  static navigationOptions = {
    title: 'Элемент',
  }
}

export default Info
