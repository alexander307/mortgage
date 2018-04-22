import {
    SET_SUM,
    SET_TERM_UNIT,
    SET_TYPE,
    CALCULATE
} from '../constants/Calculator';

export const setVal = (data) => {
    return {
        type: SET_SUM,
        id: data.id,
        value: data.value
    }
}

export const switchTermUnit = (data) => {
    return {
        type: SET_TERM_UNIT,
        id: data.id,
        value: data.value
    }
}

export const setType = (data) => {
    return {
        type: SET_TYPE,
        value: data.value
    }
}

export const calculate = (data) => {
    console.log(data, 'data from calculate')
    return {
        type: CALCULATE,
        value: data.value
    }
}
