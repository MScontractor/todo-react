import React from 'react';
import {connect} from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import {createStructuredSelector} from "reselect";
import List from '@material-ui/core/List';

import TodoListItem from '../TodoListItem';
import { ITodo, TAction, ITodoState, ShowDialogPayload } from "../../store/actions/types";
import { dataSelector } from '../../store/selectors';
import { completedTodo, delTodo, showTodoForm } from "../../store/actions";
import { useStyles } from './styles';


type TodoListProps = {
  filter: string;
  showCompleted: boolean;
  todos: ITodo[];
  onComplete: (id: string) => void,
  onDelete: (id: string) => void,
  onShowDialog: (showDialogPayload: ShowDialogPayload) => void
}

const TodoList = ({
  filter,
  showCompleted,
  todos,
  onComplete,
  onDelete,
  onShowDialog,
}: TodoListProps) => {
  const classes = useStyles();

  const filterTodos = (todo: ITodo) =>
    (todo.title.includes(filter) || todo.body.includes(filter)) &&
    (showCompleted || !todo.completed)

  return (
    <List className={classes.list}>
      {todos.filter(filterTodos).map((t: ITodo, i: number) => (
        <TodoListItem
          key={`todo-list-item${i}`} todo={t}
          onComplete={onComplete}
          onDelete={onDelete}
          onShowDialog={onShowDialog}
        />
      ))}
    </List>
  )
}

const mapStateToProps = createStructuredSelector ({
  todos: dataSelector,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<ITodoState, TAction, any>) => {
  return {
    onComplete: (id: string) => {
      dispatch(completedTodo(id))
    },
    onDelete: (id: string) => {
      dispatch(delTodo(id))
    },
    onShowDialog: (showDialogPayload: ShowDialogPayload) => {
      dispatch(showTodoForm(showDialogPayload))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)




