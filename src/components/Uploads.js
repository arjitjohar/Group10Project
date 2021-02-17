import React, { Component } from 'react';
//import {SorryThisIsFake} from './hey.txt'


class Uploads extends Component {

  constructor(props) {
    super(props);
  }

  showFile = async (e) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => { 
      const text = (e.target.result)
      console.log(text)
      alert(text)
    };
    reader.readAsText(e.target.files[0])
  }


  // ShownConversion = (props) => {
  //   //const isLoggedIn = props.isLoggedIn;
  //   const isLoggedIn = true;

  //   if (isLoggedIn) {
  //     return <SorryThisIsFake />;
  //   }
  //   return <></>;
  // }









  render = () => {

    return (<div>
      <input type="file" onChange={(e) => this.showFile(e)} />
      {/* <SorryThisIsFake /> */}
    </div>
    )
  }
}

export default Uploads;