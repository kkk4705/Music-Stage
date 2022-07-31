export const findart = (payload) => ({
  type: 'FIND_ART',
  payload
});

export const findArtThunk = (name) => async (dispath) => {
  const response = await fetch('http://localhost:3030/listArtist/find', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  });
  const data = await response.json();
  dispath(findart(data));
};
