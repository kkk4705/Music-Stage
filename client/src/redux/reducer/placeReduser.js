const placeReduser = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_PLACES':
      return payload;
    default:
      return state;
  }
};

export default placeReduser;
