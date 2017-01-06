import filter from 'lodash/filter'
import map from 'lodash/map'
import axios from 'axios'

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
        const appState = getState()
        const environment = appState.environment.radios
        const marketingPages = appState.marketingPages.checkboxes
        const locales = appState.locales.checkboxes
        let result = appState.result

        let selectedEnvironment = filter(environment, e => { return e.selected == 1})
        let selectedMarketingPages = filter(marketingPages, m => { return m.selected == 1})
        let selectedLocales = filter(locales, o => { return o.selected == 1 })
        //
        // result.selectedOptions[0].selected  = selectedEnvironment
        // result.selectedOptions[1].selected  = selectedMarketingPages
        // result.selectedOptions[2].selected  = selectedLocale
        //
        // console.log(selectedEnvironment)
        // console.log(selectedMarketingPages)
        // console.log(selectedLocales)
        // selectedEnvironment.map(i => {
        //    console.log(i.value)
        //
        // })
        map(selectedLocales, selectedLocale => {
            // console.log(selectedLocale)
            const locale = selectedLocale.value
            map(selectedMarketingPages, selectedMarketingPage =>{
                // console.log(selectedMarketingPage)
                const marketingpage = selectedMarketingPage.value
                //const url = 'https://' + selectedEnvironment[0].value + '.tesla.com/' + locale + '/' + marketingpage + '?redirect=no'
                const url = `https://${selectedEnvironment[0].value}.tesla.com/${locale}/${marketingpage}?redirect=no`
                if (ajaxcall) {
                    dispatch(fetchApiResult(`http://localhost:8055/api?url=${url}`))
                }
                console.log(url)
            })
        })

        dispatch(displayResult(result))
    }
}

export function displayResult(obj) {
    console.log('displayResult')
    return({
        type: SET_RESULT,
        payload: obj
    })
}

export function fetchApiResult(url) {

    return (disptach) => {
        console.log('fetchApiResult')
        console.log(url)
        axios.get(url)
            .then(res => {
                console.log(res)
            }, err => {
                console.warn(`Oops there is an error. ${err}`)
            })
    }

    // let promise = axios.get(url)
    // console.log(promise)
    // return({
    //     type: FETCH_API_RESULT,
    //     payload: promise
    // })
}
