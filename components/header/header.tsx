import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

interface Props {
  page: string,
  userLogin: string
}

class Header extends React.PureComponent<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      page,
      userLogin,
    } = this.props;

    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{page}</Text>
        <Text style={styles.headerText}>{userLogin}</Text>
      </View>
    )
  }
}

export default Header;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",

    padding: 20,

    backgroundColor: "#BB0D02",
  },

  headerText: {
    color: "#FFFFFF",
  }
});
