import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  info: {
    flex: 1,

    fontSize: 16,
  },

  articleWrapper: {
    marginLeft: 20,
    marginTop: 20,
    paddingRight: 20,
  },

  infoTitle: {
    marginBottom: 20,

    fontWeight: `bold`
  },

  infoDescription: {
    lineHeight: 20,
  },

  buttonsWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },

  button: {
    flex: 1,

    padding: 15,
    borderWidth: 1,
    borderColor: '#BB0D02',
  },

  buttonExit: {
    backgroundColor: '#BB0D02',
  },

  buttonText: {
    textAlign: 'center',
  },

  buttonExitText: {
    color: '#FFFFFF',
  },
})

export default style
