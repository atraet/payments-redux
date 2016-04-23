import {FETCH_PAYMENTS} from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_PAYMENTS:
            return [...state, ...action.payload];
        default:
            return state;
    }

}