export const UPDATE_COUNT = 'UPDATE_COUNT'
export const SET_LOCALE = 'SET_LOCALE'
/**set environment**/


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
        type: null
    })
}


export function setLocales(checkboxId) {
    return({
        type: SET_LOCALE,
        payload: checkboxId
    })
}