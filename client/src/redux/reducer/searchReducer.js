const searchReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_SEARCH':
      return payload;
    default:
      return state;
  }
};

export default searchReducer;
