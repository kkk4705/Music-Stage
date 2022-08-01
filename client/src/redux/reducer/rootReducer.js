import { combineReducers } from 'redux';
import allArtistsReducer from './allArtistsReducer';
import oneArtistsReducer from './oneArtistReducer';
import allEventsReducer from './allEventsReducer';
import userReducer from './userReducer';
import findArtistReducer from './findArtistReducer';
import trackReducer from './trackReducer';
import typeReducer from './typeReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  art: allArtistsReducer,
  one: oneArtistsReducer,
  event: allEventsReducer,
  user: userReducer,
  find: findArtistReducer,
  track: trackReducer,
  type: typeReducer,
  search: searchReducer,
});

export default rootReducer;
