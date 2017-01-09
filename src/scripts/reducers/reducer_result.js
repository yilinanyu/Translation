import { SET_RESULT } from '../actions/index'
// state argument is not application state, only the state this render is responsible for
export default function(state=[], action) {
    // do care about the actions
    switch(action.type) {
        // if the action type is SET_RESULT, we will return the action payload, which is the selected item.
        case SET_RESULT:
            return Object.assign({}, action.payload)
    }
    // action state is anything else, just return state.
    return state;
}