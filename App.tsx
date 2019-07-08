import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { mock } from './src/mocks/fetch-mock'
import AppRouter from './src/router'

import { ActionCreator } from './src/reducer/data/data'
import reducer from './src/reducer/index'

class App extends React.Component {
  render() {
    const store = createStore(reducer)
    store.dispatch(ActionCreator.setArticles(mock.articles))

    return <Provider store={store}>
      <AppRouter />
    </Provider>
  }
}

export default App
