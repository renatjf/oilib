import React, { Component } from 'react'

class ButtonAcessMinhaOi extends Component {
  
  render() {
    return ( 
      <div
        className={ this.props.className }>
        <a className="acesse_minha__oi" href="https://m.oi.com.br/Portal/login">Acesse</a>           
      </div>
    )
  }

}

export { ButtonAcessMinhaOi }
export default ButtonAcessMinhaOi 
