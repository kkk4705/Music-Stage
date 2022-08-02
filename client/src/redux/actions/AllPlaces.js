export const getPlace = (payload) => ({
  type: 'GET_PLACES',
  payload
});

export const getAllPlaceThunk = () => async (dispath) => {
  const response = await fetch('http://localhost:3030/allPlaces');
  const data = await response.json();
  console.log(data);
  dispath(getPlace(data.allPlaces));
};
