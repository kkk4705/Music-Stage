const allPlaceReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_PLACE':
      return payload;
    case 'DEL_PLACE':
      return state.filter((el) => el.id !== payload);
    default:
      return state;
  }
};

export default allPlaceReducer;
