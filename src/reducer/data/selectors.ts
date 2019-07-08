import NameSpace from '../name-spaces'

const NAME_SPACE = NameSpace.DATA

const getArticles = (state) => {
  return state[NAME_SPACE].articles
}

export {
  getArticles
}
