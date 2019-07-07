import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'

interface Props {
  onNameClick: () => void,
  title: string,
}

const NameItem: React.FunctionComponent<Props> = (props) => {
  const {
    onNameClick,
    title,
  } = props;

  return (
    <TouchableOpacity onPress={onNameClick}>
      <Text style={styles.nameItemTitle}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default NameItem;

const styles = StyleSheet.create({
  nameItemTitle: {
    flex: 1,

    padding: 20,
    paddingTop: 30,
    paddingBottom: 28,
    marginBottom: 20,

    borderWidth: 1,
    borderColor: `#d9d9d9`,

    fontSize: 16,
  }
})
