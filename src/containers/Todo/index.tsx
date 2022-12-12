import React from 'react'
import { TextField, FormControlLabel, Switch } from '@material-ui/core';

import Dialog from "../../components/Dialog";
import AddButton from "../../components/AddButton";
import TodoList from "../../components/TodoList";
import useStyles from "./styles";

export const Todo: React.FC = () => {
  const [showCompleted, setShowCompleted] = React.useState(true);
  const [filter, setFilter] = React.useState('');
  const classes = useStyles()
  return (
    <div  className={classes.container}>
      <div className={classes.content}>
        <div className={classes.actionsContainer}>
          <AddButton />
          <div className={classes.actionsGroup}>
            <FormControlLabel
              className={classes.actionsSwitch}
              control={
                <Switch
                  defaultChecked
                  color="secondary"
                  checked={showCompleted}
                  onChange={({ target }) => setShowCompleted(target.checked)}
                />
              }
              labelPlacement="start"
              label="Show completed"
            />
            <TextField
              label="Filter by..."
              variant="outlined"
              value={filter}
              onChange={({ target }) => setFilter(target.value)}
            />
          </div>
        </div>
        <TodoList filter={filter} showCompleted={showCompleted} />
      </div>
      <Dialog />
    </div>
  );
}

export default Todo