import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as oldActionCreator from '../actions'
import { addTodo, addCountAsync} from '../actions'

let AddTodo = (props) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          props.addTodo(input.value)
          props.addCountAsync()
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
function mapDispatchToProps(dispatch) {
    // return {
    //   onIncreaseClick: () => dispatch(addCountAsync()),
    //   addTodo: (data) => dispatch(addTodo(data))
    // }
    return {
        ...bindActionCreators(oldActionCreator, dispatch)
    }
}
AddTodo = connect(null,mapDispatchToProps)(AddTodo)

export default AddTodo