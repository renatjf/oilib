import React, { Component } from 'react';

import Header from './../organisms/Header'
import Footer from './../organisms/Footer'
import Carousel from './../molecules/Carousel'

class C2c extends Component {

  render() {

    return (
      <div>
        	<div id="container" className="banda-larga_15mega">
    <div className="wrapper">
      <div className="header">
        <div className="logo">
          <a href="#">
            
            <span className="logo-label">Oi Total</span>
          </a>
        </div>
         <div className="services">
          <div className="btn-chat">
            
            <svg   x="0px" y="0px" viewBox="0 0 12 10" >
              <polygon className="chatsvg" points="4,10 1,8 0,8 0,0 12,0 12,8 7,8 4,10 " />
            </svg>

            <span>PELO CHAT</span>
          </div>
          <div className="call">
          </div>
        </div>
      </div>
      <div className="content">
        <div className="text">
          <h1>Sua casa mais conectada com o Oi Total</h1>
          <ul>
            <li>Banda larga de 15 mega por só R$ 49,90/mês</li>
            <li>Inclui modem WiFi e antivírus</li>
            <li>Até 50 giga de espaço na nuvem no Oi Cloud</li>
            <li>Assista às suas séries e filmes favoritos</li>
            <li>Jogue e converse com amigos à distância</li>
          </ul>
        </div>
      </div>

      <div className="forms">
        <div className="label">
          <span><span className="title">Contrate agora mesmo ! A gente te liga:</span></span>
        </div>

        <div className="fields">
          <form className="form" action="javascript:;">
            <input checked="checked" type="radio" name="client" value="banda-larga" />
            <input type="hidden" name="lp" value="landing-banda-larga-15mb" />
            <div id="week" className="hide"></div>
            <div id="hours" className="hide"></div>

            <fieldset className="first">
              <label for="name">Nome</label>
              <input autocomplete="off" type="text" name="name" value="" className="input-name" id="name"/>
            </fieldset>

            <fieldset className="second">
              <label for="phone">DDD + Telefone</label>
              <input autocomplete="off" type="text" name="phone" value="" className="input-phone" id="phone"/>
            </fieldset>
          </form>

          <div className="container-btn">
            <div className="button liga">Solicitar ligação</div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="btn-regulations">
          <p>Regulamento da oferta</p><span className="icon">
          </span>
        </div>

        </div>
      </div>
      <div className="footer-movel">
        <div className="wrapper-footer-movel-buttons">
          <div className="btn-regulations type-movel">
            <p>Regulamento da oferta <span className="icon">
            </span></p>
          </div>
        </div>
      </div>
      <div className="footer-celular">
        <div className="btn-regulations type-movel">
            <p>Regulamento da oferta <span className="icon">
            </span></p>
        </div>
      </div>
    </div>


  </div>
    );
    
  }
}

export { C2c }
export default C2c