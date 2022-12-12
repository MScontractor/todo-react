import { combineReducers } from 'redux'
import todoReducer from './todoReducer'

const reducer = combineReducers({
  todos: todoReducer,
})

export default reducer

export type RootState = ReturnType<typeof reducer>
