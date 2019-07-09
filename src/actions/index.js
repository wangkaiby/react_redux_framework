
import { getpass } from "../services/todos"
let nextTodoId = 0
export const  addCountAsync = (data) => {
  return dispatch => {
      getpass(data)
      .then((res) => {
        console.log(res)
    })
  }
}

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}