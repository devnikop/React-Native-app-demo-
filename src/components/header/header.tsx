import React from 'react'
import {
  Text,
  Image,
} from 'react-native'

import style from './styles'

class Header extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <Text
          style={style.login}
        >Login</Text>
        <Image
          style={style.image}
          source={require('./user.png')}
        />
      </>
    )
  }
}

export default Header
