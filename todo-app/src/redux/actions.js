import axios from 'axios';

export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const FETCH_TODOS = 'FETCH_TODOS';
export const FETCH_MORE_TODOS ='FETCH_MORE_TODOS'
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: { text },
  };
};

export const updateTodo = (id, text, completed) => {
  return {
    type: UPDATE_TODO,
    payload: { id, text, completed },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: { id },
  };
};

export const fetchTodos = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://talented-calf-housecoat.cyclic.app/todos/'); 
      const todos = response.data;
      dispatch({
        type: FETCH_TODOS,
        payload: todos,
      });
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };
};
export const fetchMoreTodos = (page) => {
  return async (dispatch) => {
    try {
      
      const response = await axios.get(`https://talented-calf-housecoat.cyclic.app/todos?page=${page}`);
      const newTodos = response.data;

      dispatch({
        type: FETCH_MORE_TODOS,
        payload: newTodos, 
      });

      return newTodos;
    } catch (error) {
      console.error('Error fetching more todos:', error);
    }
  };
};
