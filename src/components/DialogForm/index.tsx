import React from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import { IStateForm, ITodo } from '../../store/actions/types';  
import useStyles from './styles';

interface IFormProp {
  dataTodo: IStateForm
  setData: (data: IStateForm) => void;
}

  
const DialogForm: React.FC<IFormProp> = React.memo(({dataTodo, setData}) => {

  const classes = useStyles();
 
  const handleChange =  (prop: keyof ITodo) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTodo = {...dataTodo, [prop]: event.target.value }; 
    setData(newTodo);
  } 

  return (
    <div className={classes.root}>
      <FormControl fullWidth className={classes.input} variant="outlined">
        <InputLabel htmlFor="form-input__body">Title</InputLabel>
        <OutlinedInput
          id="form-input__header"
          value={dataTodo.title}
          onChange={handleChange('title')}
          labelWidth={60}
        />
      </FormControl>
      <FormControl fullWidth className={classes.input} variant="outlined">
        <InputLabel htmlFor="form-input__body">Body</InputLabel>
        <OutlinedInput
          id="form-input__body"
          value={dataTodo.body}
          onChange={handleChange('body')}
          labelWidth={60}
        />
      </FormControl>
    </div>)
})

export default DialogForm

 