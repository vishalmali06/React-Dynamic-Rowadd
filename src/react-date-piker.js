import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
 
export default class MyApp extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div>
        <DatePicker styles={{width: '20px'}}
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}