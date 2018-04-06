import { connect } from 'react-redux'
import Calculator from '../components/Calculator'

const mapStateToProps = (state) => {
    return {
      calc_result_table: state.calc_result_table,
      calc_result_banks: state.calc_result_banks,
      calculator: state.calculator
    }
  }
  
  const CalculatorPage = connect (
    mapStateToProps
  )(Calculator)
  
  export default CalculatorPage;