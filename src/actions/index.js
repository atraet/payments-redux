import * as actionTypes from './types';

export function fetchPayments(){
    return{
        type: actionTypes.FETCH_PAYMENTS,
        payload: [
            {id: 'Payment XXXX'},
            {id: 'Payment yyyy'}
        ]
    }
}