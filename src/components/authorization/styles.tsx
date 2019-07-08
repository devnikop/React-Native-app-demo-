import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
  container: {
    flex: 1,

    padding: 30,
    paddingTop: 70,

    textAlign: 'center',
  },

  title: {
    marginBottom: 30,

    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#BB0D02',
  },

  description: {
    marginBottom: 20,

    textAlign: 'center',

  },

  textInput: {
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    marginBottom: 20,

    borderBottomWidth: 2,
    borderBottomColor: '#d9d9d9',
  },

  buttonWrapper: {
    minHeight: 300,
  },

  submitButton: {
    padding: 20,
    marginLeft: 30,
    marginRight: 30,

    borderRadius: 10,

    backgroundColor: '#BB0D02',
  },

  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
  }
})

export default style
