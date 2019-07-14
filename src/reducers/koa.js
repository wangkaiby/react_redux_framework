const koa = (state = {data: []}, action) => {
    switch (action.type) {

      case 'NAME':
        return {
         data: action.payload
        }
        case 'GETLIST':
          return {
           data: action.payload
          }
      default:
        return state
    }
  }
  
  export default koa