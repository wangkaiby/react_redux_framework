import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as oldActionCreator from '../actions'
import { Button, } from 'antd'
// import { addTodo, addCountAsync} from '../actions'
let AddTodo = (props) => {
    let input
    const confirm = e => {
        e.preventDefault()
        if (!input.value.trim()) {
            return
        }
        props.addTodo(input.value)
        props.addCountAsync({course_id: "1120728002"})
        input.value = ''
    }
  return (
    <div>
      <form>
        <input
          ref={node => {
            input = node
          }}
        />
        <Button type="primary" onClick={confirm}>
          Add Todo
        </Button >
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