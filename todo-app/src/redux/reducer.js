import { ADD_TODO, UPDATE_TODO, DELETE_TODO, FETCH_TODOS,FETCH_MORE_TODOS } from './actions';

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
        return {
          ...state,
          todos: action.payload, 
        };
      case FETCH_MORE_TODOS:
        return {
          ...state,
          todos: [...state.todos, ...action.payload], 
        };
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            text: action.payload.text,
            completed: false,
          },
        ],
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text, completed: action.payload.completed }
            : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
