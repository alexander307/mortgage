import initStore from '../store/initStore';
import {
    SET_SUM
} from '../constants/Calculator';


const baseReducer = (state = initStore, action) => {
    if (action!==undefined) {
       
        switch(action.type) {
            case SET_SUM:
                let newObj = Object.assign({}, state)
                console.log(newObj.calculator[action.id], 'newObj')
                console.log (newObj.calculator)
                newObj.calculator[action.id].value = action.value;
                return newObj
                break
    
            default:
                return state
        }
    }
   
    return state

}

export default baseReducer