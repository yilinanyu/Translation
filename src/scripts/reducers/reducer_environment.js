/**
 * Created by lyi on 12/6/2016.
 */

import { SET_ENVIRONMENT } from '../actions/index'
import map from 'lodash/map'
export default function(state=[], action) {

    switch(action.type) {
        case SET_ENVIRONMENT:
            state.radios = map(state.radios, radio => {
                radio.selected = 0
                if(radio.id === action.payload) {
                    radio.selected = 1
                }
                return radio
            })

            return Object.assign({}, state)

    }


    return state;
}
