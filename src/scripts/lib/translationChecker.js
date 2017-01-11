import filter from 'lodash/filter'
import map from 'lodash/map'
import axios from 'axios'



import CONST from '../constant'

export function processTranslations(state, ajaxcall) {

    return new Promise((response, reject) => {
        const environment = state.environment.radios
        const marketingPages = state.marketingPages.checkboxes
        const locales = state.locales.checkboxes
        let result = state.result

        let selectedEnvironment = filter(environment, e => { return e.selected == 1})
        let selectedMarketingPages = filter(marketingPages, m => { return m.selected == 1})
        let selectedLocales = filter(locales, o => { return o.selected == 1 })
        selectedLocales.push({value:''})

        let counter = 0
        const max = selectedLocales.length * selectedMarketingPages.length
        console.log(selectedLocales)


    let translations = {
            models : [],
            modelx : []
        }

        map(selectedLocales, selectedLocale => {
            const locale = selectedLocale.value
            map(selectedMarketingPages, selectedMarketingPage =>{
                const marketingPage = selectedMarketingPage.value
                const url = `https://${selectedEnvironment[0].value}.${CONST.domain}/${locale}/${marketingPage}?redirect=no`


                if (ajaxcall) {
                    fetchApiResult(`${CONST.server}?url=${url}`, marketingPage, locale )
                        .then(res => {

                            switch(res.page) {
                                case 'models':
                                    translations.models.push({locale: res.locale, data: res.data})
                                    break
                                case 'modelx':
                                    translations.modelx.push({locale: res.locale, data: res.data})
                                    break
                                default:
                                    console.warn(`page ${res.page} not found!!!`)
                            }
                            // var content = res
                            // console.log(content)
                            // var cheerio = require('cheerio'),
                            //     $ = cheerio.load(content);
                            // var selectedtext = $('h1').map(function(i, el) {
                            //     return $(this).text();
                            // }).get().join(', ');
                            // console.log(selectedtext)
                            counter++

                            if (counter == max) {
                                console.log('All the pages are fetched!!!')
                                console.log('now process the arrays ')
                                console.log(translations)
                            }
                        }, err => {
                            console.log(err)
                        })
                }
            })
        })
     })
}

export function fetchApiResult(url, page, locale) {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(res => {
                resolve({page: page, locale: locale, data: res.data})
            }, err => {
                reject(err)
            })
    })
}
