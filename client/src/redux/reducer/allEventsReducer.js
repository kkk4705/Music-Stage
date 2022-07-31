const allEventsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_EVENT':
      return payload;
    default:
      return state;
  }
};

export default allEventsReducer;
