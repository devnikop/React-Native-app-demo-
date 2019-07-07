import React from 'react'
import {
  Button,
  Text,
  TextInput,
  View,
} from 'react-native'

interface Props {

}

class Authorization extends React.PureComponent<Props> {
  constructor(props) {
    super(props)

    this._handlerButtonPress = this._handlerButtonPress.bind(this)
  }

  render() {
    return (
      <View>
        <Text>Вход</Text>
        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe tempora illo enim nemo aliquid repellat minus obcaecati praesentium! Tempore, illo officiis! In, eos porro! Reprehenderit nobis natus quam perspiciatis aliquid!</Text>
        <TextInput
          placeholder={`Логин`}
          textContentType="nickname"
        />
        <TextInput
          placeholder={`Пароль`}
          textContentType="password"
        />
        <Button
          onPress={this._handlerButtonPress}
          title=""
        />
      </View>
    )
  }

  _handlerButtonPress() {
    this.props.navigation.navigate("Home")
  }

  static navigationOptions = {
    title: 'Вход в личный кабинет',
  }
}

export default Authorization