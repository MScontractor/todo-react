import {
  ActionType,
  ActionForm,
  IAddTodoAction,
  IAddToFormAction,
  ICompletedTodoAction,
  IDeleteTodoAction,
  IEditTodoAction,
  IEmptyFormAction,
  ITodo,
  ISetTitleFormAction,
  ShowDialogPayload,
  IShowFormAction,
} from './types'

export const addTodo = (todo: ITodo): IAddTodoAction => {
  return { type: ActionType.ADD_TODO, payload: todo }
}

export const editTodo = (todo: ITodo): IEditTodoAction => {
  return { type: ActionType.EDIT_TODO, payload: todo }
}

export const delTodo = (id: string): IDeleteTodoAction => {
  return { type: ActionType.DELETE_TODO, payload: id }
}

export const completedTodo = (id: string): ICompletedTodoAction => {
  return { type: ActionType.COMPLETED_TODO, payload: id }
}

//For Form

export const addTodoToForm = (todo: ITodo): IAddToFormAction => {
  return { type: ActionForm.ADD_TODO_FORM, payload: todo }
}

export const clearTodoForm = (): IEmptyFormAction => {
  return { type: ActionForm.EMPTY_TODO_FORM }
}

export const setTitleTodoForm = (caption: string): ISetTitleFormAction => {
  return { type: ActionForm.SET_TITLE_TODO_FORM, payload: caption }
}

export const showTodoForm = (showTodoForm: ShowDialogPayload): IShowFormAction => {
  return { type: ActionForm.SHOW_TODO_FORM, payload: showTodoForm }
}
  