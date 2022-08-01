export const getTrack = (payload) => ({
  type: 'GET_TRACK',
  payload
});

export const getTrackThunk = () => async (dispath) => {
  const response = await fetch('http://localhost:3030/tracks');
  const data = await response.json();
  console.log(data);
  dispath(getTrack(data));
};
