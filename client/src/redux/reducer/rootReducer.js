import { combineReducers } from 'redux';
import allArtistsReducer from './allArtistsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  art: allArtistsReducer, user: userReducer
});

export default rootReducer;
