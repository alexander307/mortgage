import {
    SET_TOTAL_SUM
} from '../constants/Calculator';

export const setVal = (fieldVal) => {
    return {
        type: SET_TOTAL_SUM,
        total_sum: fieldVal
    }
}


