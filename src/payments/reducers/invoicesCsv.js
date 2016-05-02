import {REQUEST_INVOICES_CSV, RECEIVE_INVOICES_CSV, RECEIVE_INVOICES_CSV_ERROR} from '../actions/types';

export default function (state = {
    isFetching: false,
    csv: null
}, action) {
    switch (action.type) {
        case REQUEST_INVOICES_CSV:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_INVOICES_CSV:
            return Object.assign({}, state, {
                isFetching: false,
                csv: json2csv(action.csv)
            });
        case RECEIVE_INVOICES_CSV_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                error: true
            });
        default:
            return state;
    }
}

function json2csv(jsonArray) {
    var objArray = typeof jsonArray != 'object' ? JSON.parse(jsonArray) : jsonArray;

    var csvString = '';

    csvString += createHeader(objArray);

    for (var i = 0; i < objArray.length; i++) {
        var row = '';

        for (var index in objArray[i]) {
            row += objArray[i][index] + ';';
        }

        row.slice(0, row.Length - 1);

        csvString += row + '\r\n';
    }

    return csvString;

    function createHeader(array) {
        var row = "";
        for (var index in array[0]) {
            row += index + ';';
        }
        row = row.slice(0, -1);
        return row + '\r\n';
    }
}