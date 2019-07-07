import React from 'react'
import {
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation'

import style from './styles'

import Header from '../header/header'

interface Props {
  navigation: Navigation,
}

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>

const mock = {
  names: [
    {
      description: `Концепция «умного дома» и его использования с отдельного экрана давно казалась мне интересной. Одно время я было начал проект с OpenHAB и Raspberry Pi — весьма продвинутая штука, но необходимость настраивать кучу конфигов быстро надоела. И случайно увидев в продаже Google Nest Hub (ранее называвшийся Google Home Hub), я решил что это как раз то, что нужно — все в одном устройстве от Google, с настройкой через тач-скрин и с возможностью голосового управления. `,
      id: 0,
      title: `Andrew`,
    },
    {
      description: `В 2015 году Яндекс пожаловался на Google, обвинив его в злоупотреблении доминирующим положением на рынке мобильных ОС. «Яндекс» утверждал, что Google навязывает пользователям собственные сервисы, ограничивая доступ к сторонним.
        Официальную позицию Яндекс опубликовал на Хабре. И, судя по рейтингу и откликам, большинство хабравчан поддержало Яндекс в том споре. Тогда Яндекс выиграл дело, ФАС признала Google нарушителем закона «О конкуренции». Но прошло 4 года и я хочу обратиться к Яндексу с его же словами и призывами.`,
      id: 1,
      title: `Pedro`,
    },
    {
      description: `В первой части этого текста мы рассмотрели камеры глубины на основе структурного света и измерения round-trip задержки света, в которых в основном применяется инфракрасная подсветка. Они отлично работают в помещениях на расстояниях от 10 сантиметров до 10 метров, а главное — весьма дешевы. Отсюда массовая волна их текущего применения в смартфонах. Но… Как только мы выходим на улицу, солнце даже сквозь облака засвечивает инфракрасную подсветку и их работа резко ухудшается.`,
      id: 2,
      title: `Sander`,
    },
    {
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum modi tempore nesciunt velit possimus temporibus quibusdam hic? Sunt illo atque consectetur repellendus magnam fuga quis eos placeat nobis officia.`,
      id: 3,
      title: `Kedr`,
    },
  ]
}

class NameList extends React.PureComponent<Props> {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      names,
    } = mock

    return (
      <View>
        <FlatList
          data={names}
          renderItem={({ item }) =>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Details', {
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
    headerTitle: 'Список',
    headerRight: (
      <Header />
    )
  }
}

export default NameList
