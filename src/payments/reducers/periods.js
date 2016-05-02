import {FETCH_PERIODS} from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_PERIODS:
            return [...state, ...action.periods];
        default:
            return state;
    }
}