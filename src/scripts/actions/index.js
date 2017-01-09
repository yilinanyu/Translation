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

        map(selectedLocales, selectedLocale => {
            const locale = selectedLocale.value
            map(selectedMarketingPages, selectedMarketingPage =>{
                const marketingpage = selectedMarketingPage.value
                const url = `https://${selectedEnvironment[0].value}.tesla.com/${locale}/${marketingpage}?redirect=no`
                console.log(url)
                if (ajaxcall) {
                    fetchApiResult(`http://localhost:8055/api?url=${url}`)
                        .then(res => {
                            var content = res
                            console.log(content)
                            var cheerio = require('cheerio'),
                                $ = cheerio.load(content);
                            var selectedtext = $('h1').map(function(i, el) {
                                return $(this).text();
                            }).get().join(', ');
                            console.log(selectedtext)
                        }, err => {
                            console.log(err)
                        })
                }
            })
        })
        dispatch(displayResult(result))
    }
}

export function displayResult(obj) {
    return({
        type: SET_RESULT,
        payload: obj
    })
}

export function fetchApiResult(url) {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(res => {
                resolve(res.data)
            }, err => {
                reject(err)
            })
    })
}
