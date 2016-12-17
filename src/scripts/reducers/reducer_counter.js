import { UPDATE_COUNT } from '../actions/index'


export default function(state=[], action) {
    switch(action.type) {
        case UPDATE_COUNT:
            return Object.assign({}, state, {
                count: action.payload
            })
            break
    }

    return state;
}