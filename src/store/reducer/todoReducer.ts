import produce from 'immer';
import {
  ActionType,
  ActionForm,
  ITodo,
  ITodoState,
  TAction
} from '../actions/types';

const initState: ITodoState = {
  dataTodo: [
    {
      id: '0',
      title: 'Buy food',
      body: "Bread - eggs - milk - biscuits",
      selected: false,
      completed: true,
    },
    {
      id: '1',
      title: 'Doctor apointment',
      body: '20/12/2022 at 4pm - Av EverGreen 432',
      selected: false,
      completed: false,
    },
    {
      id: '2',
      title: 'Basketball Match',
      body: "Lakers vs Chicago Bulls - 18/12/2022 at 10pm - Steve's house",
      selected: false,
      completed: false,
    }
  ],
  selectedTodoId: null,
  showDialog: false
};

export const todoReducer = produce(
  (state: ITodoState = initState, action: TAction) => {
    switch (action.type) {
      case ActionType.ADD_TODO:
        const newId = state.dataTodo.length ?
          Number(state.dataTodo[state.dataTodo.length - 1].id) + 1 :
          0;
        const { title, body } = action.payload;
        const newTodo: ITodo = {
          id: newId.toString(),
          title,
          body,
          selected: false,
          completed: false
        };
        state.dataTodo = [...state.dataTodo, newTodo];
        return state;
      case ActionType.EDIT_TODO:
        const editedTodoId = action.payload.id;
        const editedTodo: ITodo = {
          id: editedTodoId,
          title: action.payload.title,
          body: action.payload.body,
          selected: action.payload.selected,
          completed: action.payload.completed
        };
        const editedTodoIndex = state.dataTodo.findIndex(
          (todo => todo.id === editedTodoId)
        );
        state.dataTodo[editedTodoIndex] = editedTodo;
        return state;
      case ActionType.DELETE_TODO:
        const deletedTodoId = action.payload;
        const deletedTodoIndex = state.dataTodo.findIndex(
          (todo => todo.id === deletedTodoId)
        );
        state.dataTodo.splice(deletedTodoIndex, 1);
        return state;
      case ActionType.COMPLETED_TODO:
        const completedTodoId = action.payload;
        const completedTodoIndex = state.dataTodo.findIndex(
          (todo => todo.id === completedTodoId)
        );
        state.dataTodo[completedTodoIndex].completed = !state.dataTodo[
          completedTodoIndex
        ].completed;
        return state;
      // case ActionForm.ADD_TODO_FORM:
      //   state.dataForm.data = action.payload;
      //   return state;
      // case ActionForm.EMPTY_TODO_FORM:
      //   state.dataForm.data = emptyForm;
      //   return state;
      // case ActionForm.SET_TYPE_TODO_FORM:
      //   state.dataForm.type = action.payload;
      //   return state;
      // case ActionForm.SET_TITLE_TODO_FORM:
      //   state.dataForm.title = action.payload;
      //   return state;
      case ActionForm.SHOW_TODO_FORM:
        state.selectedTodoId = action.payload.selectedTodoId || null;
        state.showDialog = action.payload.showDialog;
        return state;
      default:
        return state;
    }
  }
);

export default todoReducer;
