const ActionType = {
  SET_LOGIN: `SET_LOGIN`,
  USER_LOGOUT: `USER_LOGOUT`,
}

const initialState = {
  login: ``,
}

const ActionCreator = {
  setLogin: (data) => ({
    type: ActionType.SET_LOGIN,
    payload: data,
  }),

  userLogout: () => ({
    type: ActionType.USER_LOGOUT,
    payload: ``,
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_LOGIN:
      return { ...state, login: action.payload }
    case ActionType.USER_LOGOUT:
      return { ...state, login: action.payload }
  }
  return state
}

export {
  ActionCreator,
  reducer,
}
