import { SET_RESULT } from '../actions/index'
/**
 * Created by lyi on 12/6/2016.
 */
export default function(state=[], action) {
    switch(action.type) {
        case SET_RESULT:
            return Object.assign({}, action.payload)

    }
    return state;
}