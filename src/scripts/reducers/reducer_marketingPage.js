import { SET_MARKETING_PAGES } from '../actions/index'
import map from 'lodash/map'

export default function(state=[], action) {

    switch(action.type) {
        case SET_MARKETING_PAGES:
            state.checkboxes = map(state.checkboxes, checkbox => {
                if(checkbox.id === action.payload) {
                    checkbox.selected = !checkbox.selected
                }
                return checkbox
            })

            return Object.assign({}, state)

    }
    return state;
}
