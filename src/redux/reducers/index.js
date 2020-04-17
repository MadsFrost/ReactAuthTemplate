import counterReducer from './counter';
import mobileReducer from './isMobile';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter : counterReducer,
    isMobile : mobileReducer
})

export default allReducers;