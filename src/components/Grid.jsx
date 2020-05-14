import React from 'react'
import CellContainer from '../containers/CellContainer'
import './grid.css'

export default function Grid(props) {
  return (
    <div className="grid">
      {
        props.input.map((item,row )=> 
          <div key={row} className="row">
            { item.map((i,col) => <CellContainer key={col} val={i} row={row} col={col}/>) }
          </div>
        )
      }
    </div>
  )
}