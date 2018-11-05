import { combineReducers } from 'redux';
import data from './dataReducer';
import schedule from './scheduleReducer';

export default combineReducers({
    data,
    schedule
});