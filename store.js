import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
  players: {}
}



export const actionTypes = {
  FETCH: 'FETCH'
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH:
      return { ...state, players: action.players }
    default:
      return state
  }
}

// ACTIONS
export const serverFetch = (payload) => dispatch => {
  return dispatch({ type: actionTypes.FETCH, players: payload })
}

export const initStore = (initialState = exampleInitialState) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}