
import { connect } from 'react-redux'
import Grid from '../components/Grid'

const mapStateToProps = (state, ownProps) => {
  return {
    input: state.present.input
  }
}

export default connect(mapStateToProps)(Grid)