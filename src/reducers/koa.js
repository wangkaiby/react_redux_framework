const koa = (state = {name: '我是原始数据'}, action) => {
    switch (action.type) {
      case 'NAME':
        return {
            ...state,
            name: action.payload
        }
      default:
        return state
    }
  }
  
  export default koa