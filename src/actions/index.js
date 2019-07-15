
import { getpass, koa, getList } from "../services/todos"
let nextTodoId = 0
function comCreater (type, res){
  return {
    type: type,
    payload: res
  }
}
export const  addCountAsync = (data) => {
  return dispatch => {
      getpass(data)
      .then((res) => {
      // do sth
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

export const  getKoa = (data) => {
  return dispatch => {
    koa(data)
    .then(res => {
      dispatch(comCreater('NAME', res.data.data))
    })
  }
}

export const  list = () => {
  return dispatch => {
    getList()
    
    .then(res => {
      console.log(res.err.response)
      if (res.err.response.ok === false){
        dispatch(comCreater('GETLIST', []))
      } else{
        dispatch(comCreater('GETLIST', res.data.data))
      }
    })
  }
}
