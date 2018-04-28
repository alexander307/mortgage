import initStore from '../store/initStore';
import {
    SET_SUM,
    SET_TERM_UNIT,
    SET_TYPE,
    CALCULATE
} from '../constants/Calculator';
import Calculator from "../classes/Caclulator";


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

                if (action.value === 'reset') {

                    const calc = new Calculator({
                        total_sum: state.calculator.total_sum.value,
                        first_deposit: state.calculator.first_contribution.value,
                        term: state.calculator.term.value,
                        termUnit: state.calculator.term.termUnit,
                        percent: state.calculator.percent.value,
                        percentUnit: state.calculator.percent.termUnit
                    })

                    let calcResult

                    if (state.type === 'annuity') {
                        calcResult = calc.calcAnnuity()
                    } else {
                        calcResult = calc.calcDifferential()
                    }
                    newObj.calc_result_table =  calcResult
                } else {
                    newObj.calc_result_table = [];
                }

                break

            default:
                return state
        }
    }
   
    return newObj

}

export default baseReducer