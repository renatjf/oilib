/* eslint-disable */
import React, { Component } from 'react'

class Box extends Component {

  constructor(props) {
    super(props)
  } 

  render() {
    return ( 
      <div
        className={ this.props.className }>
        { this.props.children }
      </div>
    )
  }

}

export { Box }
export default Box 
