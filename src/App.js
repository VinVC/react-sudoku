import React from 'react' 
import { Provider } from 'react-redux'
import store from './redux/store'
import { createNew,showAnswer,verify } from './redux/actions'
import { ActionCreators } from 'redux-undo'
import './App.css'
import GridContainer from './containers/GridContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GridContainer/>
        <footer>
          <button className="mlr-10 ponter" onClick={() => store.dispatch(createNew())}>重新生成</button>
          <button className="mlr-10 ponter" onClick={() => store.dispatch(verify())}>验证</button>
          <button className="mlr-10 ponter" onClick={() => store.dispatch(showAnswer())} >显示正确结果</button>
          <button className="mlr-10 ponter" onClick={() => store.dispatch(ActionCreators.undo())} >撤销</button>
        </footer>
        
      </div>
    </Provider>
  );
}

export default App
