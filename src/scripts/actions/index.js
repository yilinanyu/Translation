import find from 'lodash/find'
import filter from 'lodash/filter'

export const UPDATE_COUNT = 'UPDATE_COUNT'
export const SET_LOCALE = 'SET_LOCALE'
export const SET_ENVIRONMENT = 'SET_ENVIRONMENT'
export const SET_RESULT = 'SET_RESULT'

export function updateCounter(operator) {
    return (dispatch, getState) => {
        let count = getState().counter.count
        count = (operator === '+' ? count+1 : count-1)
        dispatch({
            type: UPDATE_COUNT,
            payload: count
        })
    }
}

export function setEnvironment(radioId) {
    console.log(radioId)

    return({
        type: SET_ENVIRONMENT,
        payload: radioId
    })
}


export function setLocales(checkboxId) {
    return({
        type: SET_LOCALE,
        payload: checkboxId
    })
}

export function checkTranslation() {
    return (dispatch, getState) => {

        const appState = getState()
        const evn = appState.environment.radios
        const locales = appState.locales.checkboxes

        let selectedEnv = filter(locales, o => { return o.selected == 1 })
        console.log(selectedEnv)
        console.log(evn)
        console.log(locales)

        // get the selected values
        let obj = { }
        dispatch(displayResult(selectedEnv))
    }
}

export function displayResult(obj) {
    return({
        type: SET_RESULT,
        payload: obj
    })
}