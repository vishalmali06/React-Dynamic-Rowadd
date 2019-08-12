import React, { Component } from 'react';

class Assignment9 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dyanamicNetworkCap: [
        {
          val:'',
          sel:'',
          btn:'+'
        }
      ]
    }

    this.add = this.add.bind(this);
  }

  add(e) {
    console.log(e);
    let records = this.state.dyanamicNetworkCap;
    if(records[e].btn!='-'){
      const dummy = {
        val:'',
        sel:'',
        btn:'+'
      }

      records[records.length-1].btn='-';
      records.push(dummy);
      this.setState((prevState, props) => ({
        dyanamicNetworkCap:records,
      }));
  }
  }

  render() {
    const dyanamicNetworkCap = this.state.dyanamicNetworkCap.map((e, index) => {
      return <div><input type='text' value={e.val} index={index} /> 
      <select name={`document-${index}-document`}>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      <button onClick={e=>this.add(index)}>{e.btn}</button></div>;
    });
    return (
      <div>
        <div>
          {dyanamicNetworkCap}
        </div>
      </div>
    );
  }
}

export default Assignment9;