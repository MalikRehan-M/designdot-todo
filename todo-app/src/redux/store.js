import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import todoReducer from './reducer';
const store = createStore(
    todoReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  
 export default store;

