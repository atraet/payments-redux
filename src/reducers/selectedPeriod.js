import {SELECT_PERIOD} from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case SELECT_PERIOD:
            return action.payload;
        default:
            return state;
    }
}
