import * as types from '../constants/actionTypes';
import update from 'react-addons-update';

const initialItems = {
    'list':[]
};

export default function posts(state = initialItems, action = {})
{
    switch (action.type)
    {
        case types.LATEST_LIST_REQUEST:
        case types.LATEST_LIST_ERROR:
            return update(state, {
                list: { $set:  []}
            });

        case types.LATEST_LIST_SUCCESS:
            return update(state, {
                list: { $set:  action.data}
            });

        default:
            return state;
    }
}
