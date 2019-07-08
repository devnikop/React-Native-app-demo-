const ActionType = {
  SET_ARTICLES: `SET_ARTICLES`,
}

const initialState = {
  articles: [],
}

const ActionCreator = {
  setArticles: (data) => ({
    type: ActionType.SET_ARTICLES,
    payload: data,
  }),
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ARTICLES:
      return { ...state, articles: action.payload }
  }
  return state
}

export {
  ActionCreator,
  reducer,
}
