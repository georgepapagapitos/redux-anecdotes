const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'ERROR':
      return { ...state, message: action.payload.message };
    case 'SUCCESS':
      return { ...state, message: action.payload.message };
    case 'CLEAR':
      return null;
    default:
      return null;
  }
}

export const success = (message) => {
  return {
    type: 'SUCCESS',
    payload: {
      message
    }
  }
}

export const error = (message) => {
  return {
    type: 'ERROR',
    payload: {
      message
    }
  }
}

export const clear = () => {
  return {
    type: 'CLEAR'
  }
}

export default notificationReducer;