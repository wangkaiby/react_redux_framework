import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import koa from './koa'
import layout from './layout'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  koa,
  layout
})

export default todoApp