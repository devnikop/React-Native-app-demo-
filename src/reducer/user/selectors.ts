import NameSpace from '../name-spaces'

const NAME_SPACE = NameSpace.USER

const getLogin = (state) => {
  return state[NAME_SPACE].login
}

export {
  getLogin
}
