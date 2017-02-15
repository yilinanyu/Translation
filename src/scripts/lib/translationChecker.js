import filter from 'lodash/filter'
import map from 'lodash/map'
import axios from 'axios'
import cheerio from 'cheerio'
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
        let translations = {
            home:[],
            models : [],
            modelx : [],
            model3 : [],
            energy : [],
            supercharger: [],
            career: []
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
                                    translations.models.push({locale: res.locale, rawStrings: res.data})
                                    break
                                case 'modelx':
                                    translations.modelx.push({locale: res.locale, rawStrings: res.data})
                                    break
                                case '':
                                    translations.home.push({locale: res.locale, rawStrings: res.data})
                                    break
                                default:
                                    console.warn(`page ${res.page} not found!!!`)
                            }
                            counter++
                            if (counter == max) {
                                processElements(translations)
                            }
                        }, err => {
                            console.log(err)
                        })
                }
            })
        })
     })
}

function processElements(translations){
    console.log("******** translations **********")
    console.log(translations)
    fetchText(translations)
    console.log('now go through the raw HTML strings and categories them')
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

export function fetchText(data) {
    let toReturn = {}
    console.log('All pages')
    console.log(data)
    map(data, (value, key) => {
        let page = key
        let pageDetails = value
        if ( pageDetails !== null || pageDetails.length > 0 ) {

            map(pageDetails, pageDetail => {

                    let locale = pageDetail.locale
                    let rawStrings = pageDetail.rawStrings
                    let $ = cheerio.load(rawStrings)

                    let mainNavText = $('.nav-block','#main-nav').text()
                    let subNavText = $('.nav-block', '#sub-nav').text()

                console.log("******** Locale **********")
                if (locale == '') {
                    console.log('en_US')
                }
                else{
                    console.log(locale)
                }
                console.log("******** mainNavText **********")
                console.log(mainNavText)
                console.log("******** subNavText **********")
                console.log(subNavText)


                })
        }

    })

}
