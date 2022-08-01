const findArtistReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'FIND_ART':
      return payload;
    default:
      return state;
  }
};

export default findArtistReducer;
