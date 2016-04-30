import {combineReducers} from 'redux';
const rootReducer = combineReducers({
    count: (state = 0, action) => state === 0 ? ++state : 0
});

export default rootReducer;