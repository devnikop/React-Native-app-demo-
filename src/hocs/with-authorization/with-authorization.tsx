import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation'

import { PageHeader } from '../../constants'

import { ActionCreator } from '../../reducer/user/user'

interface Props {
  navigation: Navigation
  onLoginChange: (login: string) => void
}

interface State {
  isLoginValid: boolean
  isPasswordValid: boolean
  login: string
  password: string
}

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>

const withAuthorization = (Component) => {
  class WithAuthorization extends React.PureComponent<Props, State> {
    constructor(props) {
      super(props)

      this.state = {
        isLoginValid: false,
        isPasswordValid: true,
        login: ``,
        password: ``,
      }

      this._handlerButtonPress = this._handlerButtonPress.bind(this)
      this._handlerLoginChange = this._handlerLoginChange.bind(this)
    }

    render() {
      const {
        login,
      } = this.state

      return <Component
        {...this.props}
        login={login}
        onButtonPress={this._handlerButtonPress}
        onLoginChange={this._handlerLoginChange}
      />
    }

    _handlerButtonPress() {
      this._isInputsValid()
        ? this.props.navigation.navigate("Home")
        : ``
    }

    _handlerLoginChange(login) {
      this.setState({ login })

      if (login.length > 0) {
        this._setLoginValidity(true)
      } else {
        this._setLoginValidity(false)
      }

      this.props.onLoginChange(login)
    }

    _isInputsValid() {
      const {
        isLoginValid,
        isPasswordValid,
      } = this.state

      return (isLoginValid && isPasswordValid)
        ? true
        : false
    }

    _setLoginValidity(bool) {
      this.setState({
        isLoginValid: bool
      })
    }

    static navigationOptions = {
      headerTitle: PageHeader.SIGN_IN,
    }
  }

  return WithAuthorization
}

const mapDispatchToProps = (dispatch) => ({
  onLoginChange: (login) => {
    dispatch(ActionCreator.setLogin(login))
  }
})

export default compose(
  connect(null, mapDispatchToProps),
  withAuthorization
)
