import { processTranslations } from '../lib/translationChecker'

export const SET_LOCALE = 'SET_LOCALE'
export const SET_ENVIRONMENT = 'SET_ENVIRONMENT'
export const SET_RESULT = 'SET_RESULT'
export const SET_MARKETING_PAGES = 'SET_MARKETING_PAGES'
export const FETCH_API_RESULT = 'FETCH_API_RESULT'


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


export function checkTranslation(ajaxcall = false) {
    return (dispatch, getState) => {
        dispatch({type: null})
        processTranslations(getState(), ajaxcall)
            // .then(res => console.log(res), rej => console.log(rej))
    }
}

export function displayResult(obj) {
    return({
        type: SET_RESULT,
        payload: obj
    })
}

