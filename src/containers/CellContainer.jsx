
import Cell from '../components/Cell'
import { connect } from 'react-redux'
import { setVal } from '../redux/actions'


const mapStateToProps = (state, ownProps) => {
  let highlighted = false
  if (state['present']['highLight'][ownProps.row][ownProps.col]) {
      highlighted = true
  }
   return {
      highlighted
  }
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    setVal: (val) => dispatch(setVal(ownProps.row, ownProps.col, val))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Cell)
