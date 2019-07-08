import React from 'react'
import {
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native'

import style from './styles'

interface Props {
  login: string,
  onLoginChange: () => void,
  onButtonPress: () => void,
}

class Authorization extends React.PureComponent<Props> {
  render() {
    const {
      login,
      onButtonPress,
      onLoginChange,
    } = this.props

    return (
      <ScrollView style={style.container}>
        <Text style={style.title}>Вход</Text>
        <Text style={style.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe tempora illo enim nemo aliquid repellat minus obcaecati praesentium! Tempore, illo officiis! In, eos porro! Reprehenderit nobis natus quam perspiciatis aliquid!
        </Text>
        <TextInput
          onChangeText={onLoginChange}
          style={style.textInput}
          placeholder={`Логин`}
          textContentType="nickname"
          value={login}
        />
        <TextInput
          style={style.textInput}
          placeholder={`Пароль`}
          textContentType="password"
        />
        <TouchableHighlight
          onPress={onButtonPress}
          style={style.submitButton}
        >
          <Text style={style.buttonText}>
            Войти
          </Text>
        </TouchableHighlight>
      </ScrollView>
    )
  }
}

export default Authorization
