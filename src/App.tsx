import React from 'react'; 
import { Provider } from 'react-redux'; 
import { store } from './store'; 

import './App.css';
import TodoPage from './containers/Todo';

const App: React.FC = () => {
  return (
    <Provider store={store} >
      <div className="App">
        <header className="App-header">
          <h2>Todo Page</h2>
          <h5>
            This is a simple App to show how to provide different state managers and the differences between them.
            I know that the implementation of some of them could be some overkill but this is  just an example.
          </h5>
        </header>
        <TodoPage />
      </div>
    </Provider>
  );
}

export default App;