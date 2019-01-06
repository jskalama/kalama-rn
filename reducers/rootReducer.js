import { combineReducers } from 'redux';
import { searchReducer } from '../ducks/SearchDuck';

export default combineReducers({
    search: searchReducer
});
