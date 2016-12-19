import find from 'lodash/find'
import filter from 'lodash/filter'
import forEach from 'lodash/each'

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
        const env = appState.environment.radios
        const locales = appState.locales.checkboxes
        const marketingpages = appState.marketingpages.checkboxes
        let selectedLocale = filter(locales, o => { return o.selected == 1 })
        let selectedPage = filter(marketingpages, m => { return m.selected == 1})
        let selectedEnv = filter(env, e => { return e.selected == 1})
        // let selectedItem =


        // console.log(selectedLocale)
        // console.log(selectedPage)
        // console.log(evn)
        // console.log(locales)
        // console.log(marketingpages)

        // get the selected values
        // _.forEach(selectedLocale, function(value){
        //     console.log(value)
        // })
        // let obj = {
        //
        //     [
        //         {envtitle: selectedEnv},
        //         {localestitle: selectedLocale},
        //         {pagetitle:selectedPage}
        //     ]
        // }
        // dispatch(displayResult(selectedEnv))
        dispatch(displayResult(selectedPage))


    }
}

export function displayResult(obj) {
    return({
        type: SET_RESULT,
        payload: obj
    })
}