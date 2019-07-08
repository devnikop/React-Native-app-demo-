import React from 'react'
import {
  TouchableHighlight,
  Text,
  TextInput,
  View,
} from 'react-native'

import styles from './styles'

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
      <View style={styles.container}>
        <Text style={styles.title}>Вход</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe tempora illo enim nemo aliquid repellat minus obcaecati praesentium! Tempore, illo officiis! In, eos porro! Reprehenderit nobis natus quam perspiciatis aliquid!
        </Text>
        <TextInput
          onChangeText={onLoginChange}
          style={styles.textInput}
          placeholder={`Логин`}
          textContentType="nickname"
          value={login}
        />
        <TextInput
          style={styles.textInput}
          placeholder={`Пароль`}
          textContentType="password"
        />
        <TouchableHighlight
          onPress={onButtonPress}
          style={styles.submitButton}
        >
          <Text
            style={styles.buttonText}
          >
            Войти
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default Authorization
