import React, { PureComponent } from 'react'
import './cell.css'
export default class Cell extends PureComponent {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    const { value } = e.target
    if(!['','1','2','3','4','5','6','7','8','9'].includes(value)) {
      alert('请输入1-9的数字')
      return

    }
    this.props.setVal(Number(value))
  }

  render() {
    return (
      <input 
        className={ this.props.highlighted ?'hasInitialVal cell':'cell'} 
        onChange={this.handleChange} value={this.props.val} 
        disabled={this.props.highlighted} 
      />
    )
  }
}