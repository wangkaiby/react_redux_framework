const layoutPanel = (state = {userId: '王凯'}, action) => {
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
  
  export default layoutPanel