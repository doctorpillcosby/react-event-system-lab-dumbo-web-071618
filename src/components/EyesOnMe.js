// Code EyesOnMe Component Here

import React, { Component } from 'react'

export default class EyesOnM extends Component {


  focusHandler = () => {
    console.log('Good!')
  }

  blurHandler = () => {
    console.log('Hey! Eyes on me!')
  }

  render(){
    return (<button onFocus={this.focusHandler} onBlur={this.blurHandler}> A button</button>)
  }

}
