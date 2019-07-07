import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import { Name } from '../../types'

interface Props {
  name: Name,
}

class Info extends React.PureComponent<Props> {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      name
    } = this.props

    return (
      <View style={styles.info}>
        <Text style={styles.infoTitle}>{name.title}</Text>
        <Text style={styles.infoDescription}>{name.description}</Text>
      </View>
    )
  }
}

export default Info;

const styles = StyleSheet.create({
  info: {
    margin: 20,

    fontSize: 16,
  },
  infoTitle: {
    marginBottom: 20,

    fontWeight: `bold`
  },
  infoDescription: {
    lineHeight: 20,
  }
})
