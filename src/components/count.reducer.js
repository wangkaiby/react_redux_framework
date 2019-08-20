function init(initialCount) {
    return { count: initialCount + 1 };
  }
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { ...action.payload };
      case "set":
        return { ...action.payload };
      default:
        throw new Error();
    }
  }
  
  export { reducer, init };
  