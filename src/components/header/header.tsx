import React from 'react'
import { connect } from 'react-redux'
import {
  Text,
  Image,
} from 'react-native'

import style from './styles'

import { getLogin } from '../../reducer/user/selectors'

interface Props {
  login: string,
}
class Header extends React.PureComponent<Props> {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      login
    } = this.props

    return (
      <>
        <Text
          style={style.login}
        >{login}</Text>
        <Image
          style={style.image}
          source={require('./user.png')}
        />
      </>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { ...ownProps, login: getLogin(state) }
}

export default connect(mapStateToProps)(Header)
