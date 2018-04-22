import {
    SET_SUM,
    SET_TERM_UNIT,
    SET_TYPE
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


