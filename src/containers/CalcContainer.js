import React, {Component} from 'react'
import { connect } from 'react-redux'
import {setVal} from '../actions/CalculatorActions'
import Calculator from '../components/Calculator'

class CalculatorPage extends Component {

  render()  {
    return (
      <div>
      <Calculator {...this.props} />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
    return {
      calc_result_table: state.calc_result_table,
      calc_result_banks: state.calc_result_banks,
      calculator: state.calculator,
      state
    }
  }
  
const mapDispatchToProps = (dispatch) => {
  return {
    setVal: (e) => {
      dispatch(setVal(e))
    }
  }
}
  
export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(CalculatorPage)