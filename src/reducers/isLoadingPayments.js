import {SWITCH_PAYMENTS_LOADER} from '../actions/types';

export default function (state = false, action) {
    switch (action.type) {
        case SWITCH_PAYMENTS_LOADER:
            console.log(`loadingPayments reducer: ${action.payload}`);
            return action.payload;
        default:
            return state;
    }
}