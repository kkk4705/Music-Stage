const eventStatusReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_EVENT_STATUS':
      return [...state, payload];
    default:
      return state;
  }
};

export default eventStatusReducer;
