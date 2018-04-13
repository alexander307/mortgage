import {
    SET_TOTAL_SUM
} from '../constants/Calculator';

export const setVal = (fieldVal, id) => {
    return {
        type: SET_TOTAL_SUM,
        total_sum: fieldVal
    }
}


