import { combineReducers } from 'redux';
import allArtistsReducer from './allArtistsReducer';
import oneArtistsReducer from './oneArtistReducer';
import allEventsReducer from './allEventsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  art: allArtistsReducer,
  one: oneArtistsReducer,
  event: allEventsReducer,
  user: userReducer
});

export default rootReducer;
