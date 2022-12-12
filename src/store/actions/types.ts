export interface ITodo {
  id: string;
  title: string;
  body: string;
  selected: boolean;
  completed: boolean;
}

export interface ITodoState {
  dataTodo: ITodo[];
  selectedTodoId: null | string;
  showDialog: boolean;
}

export enum ActionType {
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
  EDIT_TODO = 'EDIT_TODO',
  COMPLETED_TODO = 'COMPLETED_TODO',
}

export interface IAddTodoAction {
  type: ActionType.ADD_TODO;
  payload: ITodo;
}

export interface IDeleteTodoAction {
  type: ActionType.DELETE_TODO;
  payload: string;
}

export interface IEditTodoAction {
  type: ActionType.EDIT_TODO;
  payload: ITodo;
}

export interface ICompletedTodoAction {
  type: ActionType.COMPLETED_TODO;
  payload: string;  // id
}

export enum ActionForm {
  ADD_TODO_FORM = 'ADD_TODO_FORM',
  EMPTY_TODO_FORM = 'EMPTY_TODO_FORM',
  SET_TITLE_TODO_FORM = 'SET_TITLE_TODO_FORM',
  SET_TYPE_TODO_FORM = 'SET_TYPE_TODO_FORM',
  SHOW_TODO_FORM = 'SHOW_TODO_FORM',
}

export interface IAddToFormAction {
  type: ActionForm.ADD_TODO_FORM;
  payload: ITodo;
}

export interface IEmptyFormAction {
  type: ActionForm.EMPTY_TODO_FORM;
}

export interface ISetTitleFormAction {
  type: ActionForm.SET_TITLE_TODO_FORM;
  payload: string; // 'save' | 'edit'
}

export interface ShowDialogPayload {
  showDialog: boolean;
  selectedTodoId?: string;
}

export interface IShowFormAction {
  type: ActionForm.SHOW_TODO_FORM;
  payload: {
    selectedTodoId?: string | null;
    showDialog: boolean;
  } // open || close
}

export interface IStateForm {
  id: string;
  title: string;
  body: string;
  selected: boolean;
  completed: boolean;
}

export type TAction =
  | IAddTodoAction
  | IDeleteTodoAction
  | IEditTodoAction
  | ICompletedTodoAction
  | IAddToFormAction
  | IEmptyFormAction
  | ISetTitleFormAction
  | IShowFormAction
