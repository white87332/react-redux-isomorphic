import * as types from '../constants/actionTypes';

const initialItems = {
    'list':[]
};

export default function posts(state = initialItems, action = {})
{
    switch (action.type)
    {
        case types.GET_LATEST_LIST:
            return Object.assign({}, state, {
                'list': action.data
            });
        default:
            return state;
    }
}
