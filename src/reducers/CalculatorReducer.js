// import initStore from '../store/initStore';
import {
    SET_TOTAL_SUM
} from '../constants/Calculator';


const initStore = {
    "active_page": "calculator", //calculator/map
    "calculator": {
        "total_sum" : {
            "label": "Сумма кредита",
            "value": 1000000,
            "min": 300000,
            "max": 20000000
        },
        "first_contribution": {
            "label": "Первый взнос",
            "value": 200000,
            "min": 300000,
            "max": 20000000
        },
        "term" : {
            "label": "Срок кредита",
            "value": 12,
            "term_unit": "day", //day/month
            "min": 1,
            "max": 120
        },
        "type": "annuity", //annuity/differenital,
        "calc_button": "calc" //calc/reset
    },
    "calc_result_table": null, //null/obj
  
}



const baseReducer = (state = initStore, action) => {
    if (action!==undefined) {
       
        switch(action.type) {
            case SET_TOTAL_SUM:
                let newObj = Object.assign({}, state)
                newObj.calculator.total_sum.value = action.total_sum;
                return newObj
                break
    
            default:
                return state
        }
    }
   
    return state

}

export default baseReducer