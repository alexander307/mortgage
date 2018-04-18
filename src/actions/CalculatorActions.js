import {
    SET_SUM
} from '../constants/Calculator';

export const setVal = (data) => {
    console.log(data)
    return {
        type: SET_SUM,
        id: data.id,
        value: data.value
    }
}


