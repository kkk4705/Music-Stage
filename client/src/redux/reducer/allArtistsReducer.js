const allArtistsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_ART':
      return payload;
    case 'FIND_ART':
      return state.filter((elem) => elem !== payload[0]);
    default:
      return state;
  }
};

export default allArtistsReducer;
