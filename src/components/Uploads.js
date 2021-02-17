import React, { Component, useState } from 'react';

class Uploads extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textFile: "not shown"
    };

  }

  showFile = async (e) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => { 
      var text = (e.target.result)
      this.setState({textFile: e.target.result});
      alert(text)
    };
    reader.readAsText(e.target.files[0])
  }

  render = () => {

    return (<div>
      <input type="file" onChange={(e) => this.showFile(e)} />
      <h1> {this.state.textFile}</h1>
    </div>
    )
  }
}

export default Uploads;