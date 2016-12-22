import find from 'lodash/find'
import filter from 'lodash/filter'
import unionBy from 'lodash/unionBy'

export const UPDATE_COUNT = 'UPDATE_COUNT'
export const SET_LOCALE = 'SET_LOCALE'
export const SET_ENVIRONMENT = 'SET_ENVIRONMENT'
export const SET_RESULT = 'SET_RESULT'
export const SET_MARKETINGPAGES = 'SET_MARKETINGPAGES'

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

export function setMarketingpages(checkboxId) {
    return({
        type:SET_MARKETINGPAGES,
        payload: checkboxId
    })
}


export function checkTranslation() {
    return (dispatch, getState) => {

        const appState = getState()
        const environment = appState.environment.radios
        const marketingPages = appState.marketingPages.checkboxes
        const locales = appState.locales.checkboxes
        let result = appState.result

        let selectedEnvironment = filter(environment, e => { return e.selected == 1})
        let selectedMarketingPages = filter(marketingPages, m => { return m.selected == 1})
        let selectedLocale = filter(locales, o => { return o.selected == 1 })

        result.selectedOptions[0].selected  = selectedEnvironment
        result.selectedOptions[1].selected  = selectedMarketingPages
        result.selectedOptions[2].selected  = selectedLocale

        dispatch(displayResult(result))
    }
}

export function displayResult(obj) {
    return({
        type: SET_RESULT,
        payload: obj
    })
}