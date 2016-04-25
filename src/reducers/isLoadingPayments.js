import {SWITCH_PAYMENTS_LOADER} from '../actions/types';

export default function (state = false, action) {
    switch (action.type) {
        case SWITCH_PAYMENTS_LOADER:
            return action.payload;
        default:
            return state;
    }
}