const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_MESSAGE': {
      clearTimeout(state.delay);
      return action.payload;
    }
    case 'CLEAR_MESSAGE':
      return '';
    default:
      return state;
  }
}

export const setNotification = (message, delay) => {
  return async dispatch => {
    dispatch({
      type: 'SET_MESSAGE',
      payload: {
        message,
        delay: setTimeout(() => {
          dispatch(clearNotification(''));
        }, delay * 1000)
      }
    })
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR_MESSAGE'
  }
}

export default notificationReducer;