import { createStore } from "redux"
import { createNewSudoku, generate36Cells,verifySudoku } from '../../utils/sudoku'
import { CREATE_NEW,SHOW_ANSWER,SET_VAL,VERIFY } from '../actions'
import ReduxUndo from 'redux-undo'

const initialState = {
  completeInput: createNewSudoku(),
  showingAnswer: false
}
initialState.input = generate36Cells(initialState.completeInput)
initialState.highLight = JSON.parse(JSON.stringify(initialState.input))

export function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_NEW:
      let completeInput = createNewSudoku()
      let input = generate36Cells(completeInput)
      return {...state, completeInput, input, highLight:JSON.parse(JSON.stringify(input)),showingAnswer: false }
    case SHOW_ANSWER: 
      if(state.showingAnswer) return state
      return {...state, input: state.completeInput, showingAnswer: true}
    case SET_VAL: 
      const {row, col} = action.payload
      const newValue = action.payload.val ? action.payload.val : ''
      let nextInput = JSON.parse(JSON.stringify(state.input))
      nextInput[row][col] = newValue
      return {...state, input:nextInput}
    case VERIFY: 
      verifySudoku(state.input)
      return state
    default:
      return state
  }
}

const store = createStore(ReduxUndo(reducer,{limit:20}), initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store