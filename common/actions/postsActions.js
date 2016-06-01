import * as types from '../constants/actionTypes';
import { dataGet } from '../apis/posts';

export function postsList()
{
    return {
        types: [ types.LATEST_LIST_REQUEST, types.LATEST_LIST_SUCCESS, types.LATEST_LIST_ERROR ],
        promise: dataGet(),
    };
}
