import { connect } from 'react-redux'
import {setVal} from '../actions/CalculatorActions'
import Calculator from '../components/Calculator'

const mapStateToProps = (state) => {
    return {
      calc_result_table: state.calc_result_table,
      calc_result_banks: state.calc_result_banks,
      calculator: state.calculator
    }
  }

const mapDispatchToProps = (dispatch) => {
  return {
    setVal: (e) => {
      dispatch(setVal(e))
    }
  }
}
  
  const CalculatorPage = connect (
    mapStateToProps,
    mapDispatchToProps
  )(Calculator)
  
  export default CalculatorPage;