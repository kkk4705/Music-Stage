export const addevent = (payload) => ({
  type: 'ADD_EVENT',
  payload
});

export const addEventThunk = () => async (dispath) => {
  const response = await fetch('http://localhost:3030/listArtist/events');
  const data = await response.json();
  dispath(addevent(data.allEvents));
};
