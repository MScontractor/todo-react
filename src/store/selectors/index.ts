import { createSelector } from 'reselect'
import { ITodoState } from '../actions/types'

const todoSelector = (state: any) => state.todos

export const dataSelector = createSelector(
  [todoSelector],
  (todoState: ITodoState) => {
    return todoState.dataTodo
  },
)

export const selectedTodoIdSelector = createSelector(
  [todoSelector],
  (todoState: ITodoState) => {
    return todoState.selectedTodoId
  },
)

export const showDialogSelector = createSelector(
  [todoSelector],
  (todoState: ITodoState) => {
    return todoState.showDialog
  },
)
