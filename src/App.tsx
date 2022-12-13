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
        </header>
        <TodoPage />
      </div>
    </Provider>
  );
}

export default App;