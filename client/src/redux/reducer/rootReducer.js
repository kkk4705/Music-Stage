import { combineReducers } from 'redux';
import allArtistsReducer from './allArtistsReducer';
import oneArtistsReducer from './oneArtistReducer';
import allEventsReducer from './allEventsReducer';
import userReducer from './userReducer';
import trackReducer from './trackReducer';
import typeReducer from './typeReducer';
import searchReducer from './searchReducer';
import eventsArtistsReducer from './eventsArtistReducer';
import genreReducer from './genreReducer';
import placeReduser from './placeReduser';
import eventStatusReducer from './eventStatusReducer';

const rootReducer = combineReducers({
  art: allArtistsReducer,
  one: oneArtistsReducer,
  event: allEventsReducer,
  user: userReducer,
  eventart: eventsArtistsReducer,
  track: trackReducer,
  type: typeReducer,
  genre: genreReducer,
  search: searchReducer,
  place: placeReduser,
  eventStatus: eventStatusReducer,
});

export default rootReducer;
