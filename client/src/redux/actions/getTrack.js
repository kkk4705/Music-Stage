export const getTrack = (payload) => ({
  type: 'GET_TRACK',
  payload
});
export const delTrack = (payload) => ({
  type: 'DEL_TRACK',
  payload
});
export const allTrackThunk = (track) => async (dispath) => {
  const response = await fetch('http://localhost:3030/upload/');
  const data = await response.json();
  dispath(getTrack(data));
};

export const getTrackThunk = (user, formData) => async (dispath) => {
  console.log(user, formData);
  const response = await fetch('http://localhost:3030/upload/add', {
    method: 'POST',
    // headers: {
    //   'Content-type': 'multipart/form-data; boundary=XXX'
    // },
    body: formData
  });
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    dispath(getTrack(data));
  }
};

export const delTrackThunk = (track) => async (dispath) => {
  const response = await fetch('http://localhost:3030/upload/del');
  const data = await response.json();
  console.log(data);
  dispath(getTrack(data));
};
