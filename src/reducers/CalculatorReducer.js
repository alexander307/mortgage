import initStore from '../store/initStore';
import {
    SET_TOTAL_SUM
} from '../constants/Calculator';

export default function (state = initStore, action) {
    
    switch(action.type) {
        case SET_TOTAL_SUM:
            let newObj = Object.assign({}, state)
            newObj.calculator.total_sum.value = 10//action.total_sum;
            console.log(action, 'action.total_sum')
            return newObj;
            break;

        default:
            return state;
    }
}