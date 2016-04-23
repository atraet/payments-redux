import {FETCH_PAYMENTS} from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_PAYMENTS:
            console.log(action.payload);
            return [...state, ...action.payload.data];
        default:
            return state;
    }
}