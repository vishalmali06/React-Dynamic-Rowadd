import React from 'react'
import DayPicker from 'react-simple-day-picker'
 
export default class MyForm extends React.Component {
  constructor() {
    super()
 
    this.state = {
      date: new Date()
    }
  }
 
  handleSelect = (date) => {
    this.setState({ date })
  }
 
  render() {
    return (
      <div>
        <DayPicker
          date={this.state.date}
          onSelect={this.handleSelect}
        />
      </div>
    )
  }
}