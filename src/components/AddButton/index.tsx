import React from 'react'; 
import { connect } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { createStructuredSelector } from 'reselect';
import { Add } from '@material-ui/icons';
import { Button } from '@material-ui/core';

import { dataSelector } from '../../store/selectors';
import { ITodo, ITodoState, TAction, ShowDialogPayload } from '../../store/actions/types';
import { completedTodo, delTodo, editTodo, showTodoForm } from '../../store/actions';
import useStyles from './styles';
  
interface AddButtonProps {
  onShowDialog: (showDialogPayload: ShowDialogPayload) => void
}

const AddButton: React.FC<AddButtonProps> = ({ onShowDialog }) => { 
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      variant="outlined"
      onClick={() => onShowDialog({ showDialog: true })}
      endIcon={
        <Add />
      }
    >
      Add Item
    </Button>
  )
}


const mapStateToProps = createStructuredSelector ({
  todos: dataSelector,
});


const mapDispatchToProps = (dispatch: ThunkDispatch<ITodoState, TAction, any>) => {
  return {
    completed: (id: string) => {
      dispatch(completedTodo(id))
    },
    delTodo: (id: string) => {
      dispatch(delTodo(id))
    },
    editTodo: (todo: ITodo) => {
      dispatch(editTodo(todo))
    },
    onShowDialog: (showDialogPayload: ShowDialogPayload) => {
      dispatch(showTodoForm(showDialogPayload))
    },
  }
}

export default  connect(mapStateToProps, mapDispatchToProps)(AddButton) 


