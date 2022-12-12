import React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
} from '@material-ui/core';

import {
  IStateForm,
  ITodo,
  ITodoState,
  TAction,
  ShowDialogPayload,
} from "../../store/actions/types";
import { addTodo, editTodo, showTodoForm } from '../../store/actions';
import DialogForm from "../DialogForm"; 
import { createStructuredSelector } from 'reselect';
import { showDialogSelector, selectedTodoIdSelector, dataSelector } from '../../store/selectors'; 

export const emptyForm: IStateForm = {
  id: '',
  title: '',
  body: '',
  selected: false,
  completed: false
};

interface DialogTodoProps {
  todos: ITodo[],
  showDialog: boolean;
  selectedTodoId: null | string;
  onShowDialog: (showDialogPayload: ShowDialogPayload) => void;
  onAddTodo: (todo: ITodo) => void;
  onEditTodo: (todo: ITodo) => void;
}


const DialogTodo = ({
  todos,
  showDialog,
  selectedTodoId,
  onShowDialog,
  onAddTodo,
  onEditTodo,
}: DialogTodoProps):JSX.Element => {
  const [formData, setFormData] = React.useState<IStateForm>(emptyForm);
 
  const setTodo = (todo: IStateForm)=>{
    setFormData(todo)
  }
 
  const handleClose = () => {
    setFormData(emptyForm);
    onShowDialog({ showDialog: false });
  }; 

  const handleSave = () => { 
    if (selectedTodoId) {
      onEditTodo({ ...formData, id: selectedTodoId })
    } else {
      onAddTodo({ ...formData, id: Date.now().toString(), selected: false, completed: false });
    }
    onShowDialog({ showDialog: false });
  };

  React.useEffect(() => {
    const currentTodo = todos.find((todo) => todo.id === selectedTodoId) || emptyForm;
    setFormData({ ...currentTodo });
  }, [selectedTodoId, todos])

  return (
    <div> 
      <Dialog open={showDialog} onClose={handleClose}>
        <DialogContent>
          <DialogForm setData={setTodo} dataTodo={formData} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary" disabled={formData.title.trim().length < 3 } >  
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


const mapDispatchToProps = (dispatch: ThunkDispatch<ITodoState, TAction, any>) => {
  return { 
    onAddTodo: (todo: ITodo) => {
      dispatch(addTodo(todo))
    },
    onEditTodo: (todo: ITodo) => {
      dispatch(editTodo(todo))
    },
    onShowDialog: (showDialogPayload: ShowDialogPayload) => {
      dispatch(showTodoForm(showDialogPayload))
    },
  }
}
 
const mapStateToProps = createStructuredSelector ({
  todos: dataSelector,
  showDialog: showDialogSelector,
  selectedTodoId: selectedTodoIdSelector,
});

export default connect(mapStateToProps, mapDispatchToProps)(DialogTodo)
 