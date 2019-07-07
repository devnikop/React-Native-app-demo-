import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import NameList from './components/name-list/name-list'
import Info from './components/info/info'

const mock = {
  names: [
    {
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum modi tempore nesciunt velit possimus temporibus quibusdam hic? Sunt illo atque consectetur repellendus magnam fuga quis eos placeat nobis officia.`,
      id: 0,
      title: `Andrew`,
    },
    {
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum modi tempore nesciunt velit possimus temporibus quibusdam hic? Sunt illo atque consectetur repellendus magnam fuga quis eos placeat nobis officia.`,
      id: 1,
      title: `Pedro`,
    },
    {
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum modi tempore nesciunt velit possimus temporibus quibusdam hic? Sunt illo atque consectetur repellendus magnam fuga quis eos placeat nobis officia.`,
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

const App = () => {
  const {
    names
  } = mock;

  return (
    <View style={styles.container}>
      <NameList
        names={names}
      />
      <Info
        name={names[0]}
      />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: '#fff',
  },
})
