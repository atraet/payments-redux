import {SELECT_PAYMENT} from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case SELECT_PAYMENT:
            return action.payload;
        default:
            return state;
    }
}