import React from 'react'
import { connect } from 'react-redux'
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation'

import {
  PageHeader,
  Route,
} from '../../constants'
import { Article } from '../../../types'

import { getArticles } from '../../reducer/data/selectors'

import style from './styles'

import Header from '../header/header'

interface Props {
  articles: Article[],
  navigation: Navigation,
}

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>

class NameList extends React.PureComponent<Props> {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      articles,
    } = this.props

    return (
      <View>
        <FlatList
          data={articles}
          renderItem={({ item }) =>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate(Route.DETAILS, {
                title: item.title,
                description: item.description,
              })}
            >
              <Text style={style.nameItemTitle}>
                {item.title}
              </Text>
            </TouchableOpacity>}
          style={style.nameList}
          keyExtractor={(item) => `id-${item.id}`}
        />
      </View>
    )
  }

  static navigationOptions = {
    headerTitle: PageHeader.HOME,
    headerRight: <Header />
  }
}

const mapStateToProps = (state, ownProps) => {
  return { ...ownProps, articles: getArticles(state) }
}

export default connect(mapStateToProps)(NameList)
