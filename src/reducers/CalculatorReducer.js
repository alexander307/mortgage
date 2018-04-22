import initStore from '../store/initStore';
import {
    SET_SUM,
    SET_TERM_UNIT,
    SET_TYPE,
    CALCULATE
} from '../constants/Calculator';


const baseReducer = (state = initStore, action) => {

    let newObj = Object.assign({}, state)
    if (action!==undefined) {
        switch(action.type) {

            case SET_SUM:
                newObj.calculator[action.id].value = action.value
                break

            case SET_TERM_UNIT:
                newObj.calculator[action.id].termUnit = action.value
                break

            case SET_TYPE:
                newObj.calculator.type = action.value 
                break

            case CALCULATE:
                console.log(action.value, 'value from reducer')
                newObj.calculator.calc_button = action.value
                newObj.calc_result_table =  action.value ==='reset'?'ne null':null
                break

            default:
                return state
        }
    }
   
    return newObj

}

export default baseReducer