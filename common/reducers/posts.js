import * as types from '../constants/actionTypes';

const initialItems = {
    'list':[]
};

export default function posts(state = initialItems, action = {})
{
    switch (action.type)
    {
        case types.LATEST_LIST_REQUEST:
        case types.LATEST_LIST_ERROR:
            return Object.assign({}, state);

        case types.LATEST_LIST_SUCCESS:
            return Object.assign({}, state, {
                list: action.data
            });

        default:
            return state;
    }
}
