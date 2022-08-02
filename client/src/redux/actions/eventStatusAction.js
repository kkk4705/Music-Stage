export const addEventStatus = (payload) => ({
  type: 'ADD_EVENT_STATUS',
  payload
});

export const addEventStatusThunk = ({ event_id, artist_id, message }) => async (dispath) => {
  const response = await fetch('http://localhost:3030/eventStatus', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ event_id, artist_id, message }),
  });
  const data = await response.json();
  dispath(addEventStatus(data));
};
