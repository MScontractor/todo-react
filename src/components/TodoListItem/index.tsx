import React from 'react';
import {
  ListItem,
  ListItemText,
  Typography,
  ListItemIcon,
  Checkbox,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { ITodo, ShowDialogPayload } from "../../store/actions/types";
import { useStyles } from './styles';

type TodoListItemProps = {
  todo: ITodo,
  onComplete: (id: string) => void,
  onDelete: (id: string) => void,
  onShowDialog: (showDialogPayload: ShowDialogPayload) => void
}

const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  onComplete,
  onDelete,
  onShowDialog,
} : TodoListItemProps) => {
  const classes = useStyles();

  const handleOnComplete = (event: React.ChangeEvent<HTMLInputElement>) => {
    onComplete(event.target.name)
  };

  const handleOnEdit = () => {
    onShowDialog({
      selectedTodoId: todo.id,
      showDialog: true,
    });
  };

  const handleOnDelete = () => {
    onDelete(todo.id);
  };

  return (
    <ListItem
      className={classes.listItem}
      component={'li'}
      alignItems="center"
      selected={todo.selected}
    >
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={todo.completed}
          name={todo.id}
          onChange={handleOnComplete}
          tabIndex={-1} disableRipple
          inputProps={{ 'aria-labelledby': 'labelId' }}
        />
      </ListItemIcon>
      <ListItemText
        primary={
          <strong>
            {todo.completed ? <del>{todo.title}</del> : todo.title}
          </strong>
        }
        secondary={
          <Typography component="span" variant="inherit" color={"textPrimary"}>
            {todo.completed ? <del>{todo.body}</del> : todo.body}
          </Typography>
        }
      />
      <div onClick={handleOnEdit} className={classes.button}>
        <EditIcon  style={{fontSize: '1rem' }} />
      </div> 
      <div onClick={handleOnDelete} className={classes.button}>
        <DeleteIcon  style={{fontSize: '1rem' }} />
      </div>
    </ListItem>
  )
}

export default TodoListItem
