import React, { Component } from 'react'
import { TweenMax } from 'gsap'

class ModalMobile extends Component {

  shouldComponentUpdate(nextProps, nextState){
    if ( nextState ){
      if ( nextState.show_menu != nextProps.show_menu) {
        this._applyAnimation(nextProps)
      }
    } else {
      this._applyAnimation(nextProps)
    }

    this.setState(nextProps);

    return false
  }

  _applyAnimation(nextProps){ 

    if(nextProps.show_menu){
      TweenMax.set('.modal__Mobile',{top:"0%"})
      TweenMax.to('.modal__Mobile',0.3,{opacity:"1"})
    }else{
      TweenMax.to('.modal__Mobile',0.3,{opacity:"0"})
      TweenMax.set('.modal__Mobile',{top:"100%"})
    }
  }

  render() {

    let theme = !this.props.theme ? '' : this.props.theme;

    return (
      <div className={`modal__Mobile ${theme}`}>

          <div className="container" onClick={this.props.show_mobile_menu}>
            <div className="menu__logo">
              <a>
                <span className="isvg loaded">
                <svg viewBox="0 0 69 60"><g fill="#FFF" className="oi"><path d="M40.3 23.9c1.5 0 2.8-1.3 2.8-2.9 0-1.5-1.3-2.8-2.8-2.8s-2.8 1.3-2.8 2.8c0 1.6 1.2 2.9 2.8 2.9zm-12.4 1.8c-4.5 0-7.8 3.5-7.8 8.3s3.3 8.3 7.8 8.3 7.7-3.4 7.8-8.3c0-4.8-3.3-8.3-7.8-8.3zm0 12.6c-2.1 0-3.2-2.2-3.2-4.3s1.1-4.2 3.2-4.2 3.1 2.1 3.2 4.2c0 2.1-1.1 4.3-3.2 4.3z"></path><ellipse cx="40.4" cy="34" rx="2.9" ry="8.3"></ellipse></g><g fill="#9F2AFF" className="ameba"><path d="M27.9 29.7c-2.1 0-3.3 2.1-3.3 4.3s1.2 4.4 3.3 4.4 3.3-2.2 3.3-4.4c-.1-2.2-1.2-4.3-3.3-4.3z"></path><path d="M53.9 15.7C46.6 10.8 41 .2 25.9.2 8.9.2 0 15.7 0 28.9c0 19.3 16.3 30.9 36.2 30.9 18.2 0 32.2-13.2 32.2-23.9 0-10-6.3-14.8-14.5-20.2zm-26 26.5c-4.6 0-7.7-3.6-7.7-8.2s3.1-8.2 7.7-8.2 7.7 3.6 7.7 8.2c-.1 4.6-3.1 8.2-7.7 8.2zm12.4-23.9c1.5 0 2.7 1.2 2.7 2.7s-1.2 2.8-2.7 2.8-2.7-1.2-2.7-2.8c0-1.5 1.2-2.7 2.7-2.7zm.1 23.9c-1.5 0-2.8-3.7-2.8-8.2s1.3-8.2 2.8-8.2 2.8 3.7 2.8 8.2c0 4.6-1.3 8.2-2.8 8.2z"></path></g></svg>
                </span>
              </a>
            </div>
            <a className="menu__submenu__header__close">
              <span className="isvg loaded">
                <svg version="1.1" x="0px" y="0px" width="27px" height="27px" viewBox="-639.5 400.5 27 27" xmlSpace="preserve"><g><path d="M-612.5,401.9l-1.4-1.4c0,0,0,0-12.1,12.1c-12.1-12.1-12.1-12.1-12.1-12.1l-1.4,1.4l12.1,12.1l-12.1,12.1l1.4,1.4c0,0,0,0,12.1-12.1c12.1,12.1,12.1,12.1,12.1,12.1l1.4-1.4l-12.1-12.1L-612.5,401.9z"></path></g>
                </svg>
                </span>
            </a>
          </div>

          <ul className="menu__submenu__primary">
            <li className="menu__submenu__primary__item">
              <a href="/combo/">
                <span className="">Combo</span>
              </a>
            </li>
            <li className="menu__submenu__primary__item">
              <a href="/tv-hd/">
                <span className="">TV HD</span>
              </a>
            </li>
            <li className="menu__submenu__primary__item">
              <a href="/celular/">
                <span className="">Celular</span>
              </a>
            </li>
            <li className="menu__submenu__primary__item">
              <a href="/internet/">
                <span className="">Internet</span>
              </a>
            </li>
            <li className="menu__submenu__primary__item">
              <a href="/fixo/">
                <span className="">Fixo</span>
              </a>
            </li>
          </ul>

          <ul className="menu__submenu__secondary">
            <li className="menu__submenu__secondary__item">
              <a href="http://www.oi.com.br/oi/oi-pra-voce/planos-servicos/oi-movel/recarga/">
                <span className="">Recarga</span>
              </a>
            </li>
            <li className="menu__submenu__secondary__item">
              <a href="/minha-oi/segunda-via/">
                <span><span>2</span><sup>a</sup><span> via</span></span>
              </a>
            </li>
            <li className="menu__submenu__secondary__item">
              <a href="http://www.oi.com.br/oi/oi-pra-voce/minha-oi/conta-online">
                <span className="">Conta Online</span>
              </a>
            </li>
            <li className="menu__submenu__secondary__item">
              <a href="http://www.oismart.com.br/">
                <span className="">Oi Smart</span>
              </a>
            </li>
            <li className="menu__submenu__secondary__item">
              <a href="http://www.oi.com.br/oi/oi-pra-empresas/">
                <span className="">Empresas</span>
              </a>
            </li>
            <li className="menu__submenu__secondary__item">
              <a href="http://ri.oi.com.br/oi2012/web/default_pt.asp?idioma=0&amp;conta=28">
                <span className="">Investidores</span>
              </a>
            </li>
          </ul>
        </div>
    );

  }
}

export {
  ModalMobile
}
export default ModalMobile;



