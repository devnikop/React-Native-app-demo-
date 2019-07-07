import React from 'react'
import {
  FlatList,
  StyleSheet,
  View,
} from 'react-native'

import {
  Name
} from '../../types'

import NameItem from '../name-item/name-item'

interface Props {
  names: Name[],
}



class NameList extends React.PureComponent<Props> {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      names,
    } = this.props

    return (
      <View>
        <FlatList
          data={names}
          renderItem={({ item }) =>
            <NameItem
              title={item.title}
              onNameClick={this._handlerNameClick}
            />}
          style={styles.nameList}
          keyExtractor={(item) => `id-${item.id}`}
        />
      </View>
    )
  }

  _handlerNameClick() {

  }
}

export default NameList

const styles = StyleSheet.create({
  nameList: {
    padding: 15,
  }
})
