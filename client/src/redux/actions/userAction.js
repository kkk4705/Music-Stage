import { DELETE_USER, SET_USER } from '../types/userTypes';
import * as endPoints from '../../config/endPoints';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const deleteUser = () => ({
  type: DELETE_USER,
});

export const signUp = (payload, navigate) => async (dispatch) => {
  const response = await fetch(endPoints.signUp(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload),
  });
  if (response.status === 200) {
    const user = await response.json();
    dispatch(setUser(user));
    console.log('проверка type user, user=>', user);
    if (user.type === 'artist') {
      navigate('/artist');
    } else if (user.type === 'owner') {
      navigate('/owner');
    }
  } else {
    navigate('/');
  }
};

export const signIn = (payload, navigate) => async (dispatch) => {
  const response = await fetch(endPoints.signIn(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload),
  });
  if (response.status === 200) {
    const user = await response.json();
    dispatch(setUser(user));
    navigate('/');
  } else {
    navigate('/auth/signin');
  }
};

export const signOut = () => async (dispatch) => {
  const response = await fetch(endPoints.signOut(), {
    credentials: 'include',
  });
  if (response.status === 200) {
    dispatch(deleteUser());
  }
};

export const checkAuth = () => async (dispatch) => {
  const response = await fetch(endPoints.checkAuth(), {
    credentials: 'include',
  });
  if (response.status === 200) {
    const user = await response.json();
    dispatch(setUser(user));
  }
};
