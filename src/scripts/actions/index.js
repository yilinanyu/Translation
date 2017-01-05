import filter from 'lodash/filter'
import axios from 'axios'
export const UPDATE_COUNT = 'UPDATE_COUNT'
export const SET_LOCALE = 'SET_LOCALE'
export const SET_ENVIRONMENT = 'SET_ENVIRONMENT'
export const SET_RESULT = 'SET_RESULT'
export const SET_MARKETING_PAGES = 'SET_MARKETING_PAGES'
export const FETCH_API_RESULT = 'FETCH_API_RESULT'

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
        type:SET_MARKETING_PAGES,
        payload: checkboxId
    })
}


export function checkTranslation(ajaxcall = 0) {
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

        // if (ajaxcall==1) {
        //     dispatch(fetchApiResult('url'))
        // }
        dispatch(fetchApiResult('https://appsheettest1.azurewebsites.net/sample/posts'))
        // dispatch(displayResult(result))
    }
}

export function displayResult(obj) {
    return({
        type: SET_RESULT,
        payload: obj
    })
}

export function fetchApiResult(url){
    let promise = axios.get(url)
    console.log(promise)
    return({
        type: FETCH_API_RESULT,
        payload: promise
    })
}
