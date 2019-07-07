import React from 'react'
import {
  Text,
  View,
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
      </View>
    )
  }

  static navigationOptions = {
    title: 'Элемент',
  }
}

export default Info
