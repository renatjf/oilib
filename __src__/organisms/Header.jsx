import React, { Component } from 'react'
import ButtonAcessMinhaOi from './../atoms/ButtonAcessMinhaOi'

var showButtonMinhaOi;

class Header extends Component {

  
  render() {
    
   let theme = !this.props.theme ? '' : this.props.theme;
   let className = this.props.layout === 'grid' ? 'container-full' : 'container-grid';
   let namePage = !this.props.namePage ? '' : this.props.namePage;

   if (namePage == "Minha Oi") {
      showButtonMinhaOi = <ButtonAcessMinhaOi />;
    }

    return (
        <div className={`header-oi ${theme}`}>
          <nav className="menu container">
            <ul className={`menu__items ${theme}`}>
              <li className="menu__logo menu__item">
                <a>
                  <span className="isvg loaded">
                    <svg viewBox="0 0 69 60">
                      <g fill="#FFF" className="oi">
                        <path d="M40.3 23.9c1.5 0 2.8-1.3 2.8-2.9 0-1.5-1.3-2.8-2.8-2.8s-2.8 1.3-2.8 2.8c0 1.6 1.2 2.9 2.8 2.9zm-12.4 1.8c-4.5 0-7.8 3.5-7.8 8.3s3.3 8.3 7.8 8.3 7.7-3.4 7.8-8.3c0-4.8-3.3-8.3-7.8-8.3zm0 12.6c-2.1 0-3.2-2.2-3.2-4.3s1.1-4.2 3.2-4.2 3.1 2.1 3.2 4.2c0 2.1-1.1 4.3-3.2 4.3z"></path><ellipse cx="40.4" cy="34" rx="2.9" ry="8.3"></ellipse></g><g fill="#9F2AFF" className="ameba"><path d="M27.9 29.7c-2.1 0-3.3 2.1-3.3 4.3s1.2 4.4 3.3 4.4 3.3-2.2 3.3-4.4c-.1-2.2-1.2-4.3-3.3-4.3z"></path><path d="M53.9 15.7C46.6 10.8 41 .2 25.9.2 8.9.2 0 15.7 0 28.9c0 19.3 16.3 30.9 36.2 30.9 18.2 0 32.2-13.2 32.2-23.9 0-10-6.3-14.8-14.5-20.2zm-26 26.5c-4.6 0-7.7-3.6-7.7-8.2s3.1-8.2 7.7-8.2 7.7 3.6 7.7 8.2c-.1 4.6-3.1 8.2-7.7 8.2zm12.4-23.9c1.5 0 2.7 1.2 2.7 2.7s-1.2 2.8-2.7 2.8-2.7-1.2-2.7-2.8c0-1.5 1.2-2.7 2.7-2.7zm.1 23.9c-1.5 0-2.8-3.7-2.8-8.2s1.3-8.2 2.8-8.2 2.8 3.7 2.8 8.2c0 4.6-1.3 8.2-2.8 8.2z"></path>
                      </g>
                    </svg>
                  </span>
                </a>
              </li>
              <li className="menu__item__primary medium-up menu__item">
                  <span>
                    <a href="/combo/">Combo</a>
                  </span>
              </li>
              <li className="menu__item__primary medium-up menu__item">
                  <span>
                    <a href="/tv-hd/">TV HD</a>
                  </span>
              </li>
              <li className="menu__item__primary medium-up menu__item">
                  <span>
                    <a href="/celular/">Celular</a>
                  </span>
              </li>
              <li className="menu__item__primary medium-up menu__item">
                  <span>
                    <a href="/internet/">Internet</a>
                  </span>
              </li>
              <li className="menu__item__primary medium-up menu__item">
                  <span>
                    <a href="/fixo/">Fixo</a>
                  </span>
              </li>
              <li className="menu__item__secondary large-up menu__item large-up">
                  <a href="http://www.oi.com.br/oi/oi-pra-voce/planos-servicos/oi-movel/recarga/">Recarga</a>
              </li>
              <li className="menu__item__secondary large-up menu__item large-up">
                <a href="http://www.oi.com.br/minha-oi/segunda-via/">
                  <span>
                    <span>2</span>
                    <sup>a</sup>
                    <span>Via</span>
                  </span>
                </a>
              </li>
              <li className="menu__item__secondary extra-large-up menu__item extra-large-up">
                <a href="http://www.oi.com.br/oi/oi-pra-voce/minha-oi/conta-online">Conta Online</a>
              </li>
              <li className="menu__item__secondary extra-large-up menu__item extra-large-up">
                <a href="http://www.oi.com.br/oi/oi-pra-voce/planos-servicos/oi-movel/aparelhos/conheca-os-aparelhos">Aparelhos</a>
              </li>
              <li className={`menu__item__secondary menu__item__search medium-up menu__item ${theme}`}>
                <a href="http://faq.oi.com.br/busca/">
                  <span className="isvg loaded">
                    <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-10 692 10 10" enableBackground="new -10 692 10 10">
                    <g>
                      <path d="M-9.8,701.8c0.3,0.3,0.8,0.3,1.1,0l1.6-1.6c0.1-0.1,0.1-0.1,0.2-0.2c0.7,0.5,1.6,0.8,2.5,0.8
                      c2.4,0,4.4-2,4.4-4.4c0-2.4-2-4.4-4.4-4.4s-4.4,2-4.4,4.4c0,0.9,0.3,1.8,0.8,2.5c-0.1,0-0.2,0.1-0.2,0.2l-1.6,1.6
                      C-10.1,701-10.1,701.5-9.8,701.8z M-8.1,696.4c0-2,1.6-3.7,3.7-3.7s3.7,1.6,3.7,3.7s-1.6,3.7-3.7,3.7S-8.1,698.4-8.1,696.4z">
                      </path>
                    </g>
                    </svg>
                  </span>
                  Busca
                </a>
              </li>
              <li className="menu__minha-oi menu__item">
                  <a className={`${theme}`} href="http://www.oi.com.br/minha-oi/">Minha Oi</a>
              </li>
              <li className="menu__item__mobile menu__item">
                  <a onClick={this.props.show_mobile_menu}>Produtos</a>
              </li>
              <li className="menu__item__mobile menu__item">
                  <a href="/minha-oi/">Minha Oi</a>
              </li>
            </ul>
          </nav>

         <div className="container-full box__title">
          <div className={ className }>
           <h1 className={`headerTitle ${theme}`}>
            {`${namePage}`}              
           </h1>
           { showButtonMinhaOi }
           
          </div>
          


         </div>
        </div>
    );
  } 
}

export { Header }
export default Header;



