import { combineReducers } from 'redux';
import allArtistsReducer from './allArtistsReducer';

const rootReducer = combineReducers({
  art: allArtistsReducer
});

export default rootReducer;
