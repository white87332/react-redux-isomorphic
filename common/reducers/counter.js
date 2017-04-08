import update from 'immutability-helper';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';

const initialState = {
    numbers: 0
};

export default function counter(state = initialState, action = {})
{
    switch (action.type)
    {
        case INCREMENT_COUNTER:
            return update(state, {
                numbers: { $set: state.numbers + 1 }
            });
        case DECREMENT_COUNTER:
            return update(state, {
                numbers: { $set: state.numbers - 1 }
            });
        default:
            return state;
    }
}
