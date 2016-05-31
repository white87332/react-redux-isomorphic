import * as types from '../constants/actionTypes';
import { dataGet } from '../utils/webApi';

export function postsList()
{
    let url = "http://127.0.0.1:3000/api";
    return {
        types: [ types.LATEST_LIST_REQUEST, types.LATEST_LIST_SUCCESS, types.LATEST_LIST_ERROR ],
        promise: dataGet(url),
    };
}
