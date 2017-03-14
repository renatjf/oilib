/* eslint-disable */
import React, { Component } from 'react'

class Button extends Component {
  
  render() {
    return ( 
      <div
        className={ this.props.className }>
        <a className="acesse_minha__oi" href="https://m.oi.com.br/Portal/login">Acesse</a>           
      </div>
    )
  }

}

export { Button }
export default Button 
