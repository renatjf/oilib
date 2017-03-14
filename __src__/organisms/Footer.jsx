import React, { Component } from 'react'
import Link from './../atoms/Link'

class Footer extends Component {

  render() {

    let theme = !this.props.theme ? '' : this.props.theme;

    return (
      <div className={`footer ${theme}`}>

        <nav className="footer__nav container">

          <dl className={`footer__category ${theme}`}>

            <dt className="footer__category__title">

              <span className="isvg">
                <svg x="0px" y="0px" viewBox="-255 347 100 100" xmlSpace="preserve">
                <polygon points="-255,443 -222,443 -222,441 -253,441 -253,355 -222,355 -222,353 -255,353 "></polygon>
                <polygon points="-156,353 -189,353 -189,355 -158,355 -158,441 -189,441 -189,443 -156,443 "></polygon>
                </svg>
              </span>

              <a href="http://www.oi.com.br/combo/">Combo</a>
            </dt>

            <dd className="footer__category__item">
              <a href="http://www.oi.com.br/combo/">Planos</a>
            </dd>

            <dd className="footer__category__item">
              <a href="http://www.oi.com.br/minha-oi/combo/">Atendimento</a>
            </dd>

            <dd className="footer__category__item">
              <a href="http://www.oi.com.br/minha-oi/combo/">
              <span className="medium-only">Serviços</span>
              <span className="large-up">Serviços Adicionais</span></a>
            </dd>
          </dl>

          <dl className={`footer__category ${theme}`}>
            <dt className="footer__category__title">
              <span className="isvg">
                <svg version="1.1" viewBox="0 0 100 100" x="0px" xmlSpace="preserve" y="0px"><g><g>
                <circle cx="75.7" cy="77.6" r="3.4"></circle></g> <g><circle cx="51.6" cy="62.1" r="3.4">
                </circle></g> <g><circle cx="39.6" cy="62.1" r="3.4"></circle></g><g><circle cx="51.6" cy="50.1" r="3.4">
                </circle></g> <g><circle cx="39.6" cy="50.1" r="3.4"></circle></g><g>
                <path d="M70.6,55.4h-5.2V8.6H29.3V0h-3.4v8.6v3.3v43.7c-10.6,1.7-18.9,11-18.9,22.1c0,12.4,10,22.4,22.4,22.4h41.5
                c12.5,0,22.4-10,22.4-22.4S82.9,55.4,70.6,55.4z M29.3,12.1H62v22.5H29.3V12.1z M29.3,58.8v-3.4V38H62v37.9H29.3V58.8z M70.6,97
                H29.1C18.6,97,10,88.6,10,77.9c0-9.4,6.7-17.1,15.5-18.6v20.2h39.7V59h5.2c10.5,0,19.1,8.5,19.1,19.1C89.5,88.7,81.1,97,70.6,97z">
                </path></g></g>
                </svg>
              </span>
              <a href="http://www.oi.com.br/fixo/">Fixo</a>
            </dt>
            <dd className="footer__category__item">
              <a href="http://www.oi.com.br/fixo/">Planos</a>
            </dd>
            <dd className="footer__category__item">
              <a href="http://www.oi.com.br/minha-oi/fixo/">Atendimento</a>
            </dd>
            <dd className="footer__category__item">
              <a href="http://www.oi.com.br/minha-oi/fixo/">
                <span className="medium-only">Serviços</span>
                <span className="large-up">Serviços Adicionais</span>
              </a>
            </dd>
          </dl>

          <dl className={`footer__category ${theme}`}>
            <dt className="footer__category__title">
              <span className="isvg">
              <svg className="icon-internet" version="1.1" viewBox="0 0 100 100" x="0px" xmlSpace="preserve" y="0px"><g><g>
              <path d="M51.5,1h-2C22.3,1,0,23.2,0,50.5s22,49.5,49.5,49.5h2C78,98.8,98.9,77.3,99.1,50.6v-2.2H51.5V1z M37.4,6.6
              c-8,8-13.3,23.4-13.7,41.8H3.9C4.8,28.5,18.9,11.8,37.4,6.6z M3.9,52.3h19.8c0.3,18.9,5.9,34.6,14,42.4
              C18.9,89.8,4.7,72.8,3.9,52.3z M47.4,96C36.8,93.8,28.1,75,27.8,52.3h19.7V96z M47.4,48.4H27.8c0.5-22.5,9-41,19.7-43.2V48.4z
              M94.9,52.3c-0.6,20-14.5,36.7-33.2,42c8-8,13.1-23.6,13.4-42H94.9z M71.1,52.3c-0.5,21.8-8.6,40.4-18.7,43.5c-0.3,0-0.6,0-0.9,0
              V52.3H71.1z"></path></g><g><g><circle cx="97" cy="39.7" r="3"></circle></g><g><circle cx="92" cy="27.8" r="3"></circle></g><g>
              <circle cx="84.2" cy="16.9" r="3"></circle></g><g><circle cx="73.2" cy="9" r="3"></circle></g><g><circle cx="60.4" cy="3" r="3"></circle>
              </g></g></g>
              </svg>
              </span>
              <a href="http://www.oi.com.br/internet/">Internet</a>
            </dt>
            <dd className="footer__category__item">
              <a href="http://www.oi.com.br/internet/">Planos</a>
            </dd>
            <dd className="footer__category__item">
              <a href="http://www.oi.com.br/minha-oi/internet/">Atendimento</a>
            </dd>
            <dd className="footer__category__item">
              <a href="http://www.oi.com.br/minha-oi/internet/">
                <span className="medium-only">Serviços</span>
                <span className="large-up">Serviços Adicionais</span>
              </a>
            </dd>
          </dl>

          <dl className={`footer__category ${theme}`}>
            <dt className="footer__category__title">
              <span className="isvg">
                <svg version="1.1" viewBox="0 0 100 100" x="0px" xmlSpace="preserve" y="0px">
                <path d="M76.8,12.5H54l8.4-8.4l-2.5-2.5l-9.5,9.5l-9.5-9.5l-2.5,2.5l8.6,8.6H23.2C10.5,12.6,0,22.9,0,35.9v39.3c0,12.6,10.1,23.1,23.1,23.2h53.7c12.8,0,23.2-10.3,23.2-23.2V35.7C100,22.8,89.7,12.5,76.8,12.5z M21.5,94.4c-8.1-0.8-15-6.6-17.2-14.2h17.2V94.4z M37.6,94.4H25.1V80h12.5V94.4z M76.9,94.4H41V80h54.9C93.6,88.5,86,94.4,76.9,94.4zM96.7,74.7c0,0.8,0,1.7-0.2,2.5v-0.6H3.9c0-0.6-0.2-1.2-0.2-1.9V35.4c0-11.1,8.9-19.7,19.7-19.7h53.7c11.1,0,19.7,8.9,19.7,19.7V74.7z"></path> <circle cx="75.2" cy="87.4" r="2.7"></circle></svg>
              </span>
              <a href="http://www.oi.com.br/tv-hd/">TV HD</a>
            </dt>
            <dd className="footer__category__item">
              <a href="http://www.oi.com.br/tv-hd/">Planos</a>
            </dd>
            <dd className="footer__category__item">
              <a href="http://www.oi.com.br/minha-oi/tv-hd/">Atendimento</a>
            </dd>
            <dd className="footer__category__item">
              <a href="http://www.oi.com.br/minha-oi/tv-hd/">
                <span className="medium-only">Serviços</span>
                <span className="large-up">Serviços Adicionais</span>
              </a>
            </dd>
          </dl>

          <dl className={`footer__category ${theme}`}>
            <dt className="footer__category__title">
              <span className="isvg">
                <svg viewBox="0 0 100 100" x="0px" xmlSpace="preserve" y="0px">
                <g>
                <g><circle cx="44.8" cy="67.8" r="3.3"></circle></g>
                <g><circle cx="44.8" cy="78" r="3.3"></circle></g>
                <g><circle cx="33" cy="67.8" r="3.3"></circle></g>
                <g><circle cx="33" cy="78" r="3.3"></circle></g>
                <g><circle cx="56.9" cy="67.8" r="3.3"></circle></g>
                <g><circle cx="56.9" cy="78" r="3.3"></circle></g>
                <g><circle cx="44.8" cy="88.1" r="3.3"></circle></g>
                <g><circle cx="56.9" cy="88.1" r="3.3"></circle></g>
                <g><circle cx="68.8" cy="67.8" r="3.3"></circle></g>
                <g><circle cx="68.8" cy="78" r="3.3"></circle></g>
                <g>
                <path d="M59.4,0H40.6c-12.2,0-22,9.8-22,22V78c0,12.2,9.8,22,22,22h18.8c12.2,0,22-9.8,22-22V22C81.4,9.8,71.6,0,59.4,0z M78,78c0,10.3-8.3,18.8-18.6,18.8H40.6c-10.3,0-18.8-8.3-18.8-18.8V59.2H78V78z M78,55.9H21.9V23.6H78V55.9z M22,20.2C23,10.8,30.9,3.3,40.6,3.3h18.8c9.7,0,17.7,7.3,18.6,16.9H22z"></path>
                </g>
                </g>
                </svg>
              </span>
            <a href="http://www.oi.com.br/celular/">Celular</a>
            </dt>
            <dd className="footer__category__item">
              <a href="http://www.oi.com.br/celular/">Planos</a>
            </dd>
            <dd className="footer__category__item">
              <a href="http://www.oi.com.br/minha-oi/celular/">Atendimento</a>
            </dd>
            <dd className="footer__category__item">
              <a href="http://www.oi.com.br/minha-oi/celular/">
                <span className="medium-only">Serviços</span>
                <span className="large-up">Serviços Adicionais</span>
              </a>
            </dd>
          </dl>
        </nav>

        <div className="footer__region container">
          <a href="/" className="footer__region__logo">
            <svg version="1.1" id="Logo" x="0px" y="0px" viewBox="0 0 312 294">
            <defs>
                <linearGradient id="purple-gradient" x1="5" y1="147" x2="307" y2="147" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#D528AB"></stop>
                    <stop offset="0.136" stopColor="#C129C9"></stop>
                    <stop offset="0.214" stopColor="#B229E1"></stop>
                    <stop offset="0.297" stopColor="#A72AF2"></stop>
                    <stop offset="0.387" stopColor="#A12AFC"></stop>
                    <stop offset="0.5" stopColor="#9F2AFF"></stop>
                    <stop offset="0.597" stopColor="#9C2DFF"></stop>
                    <stop offset="0.676" stopColor="#9237FF"></stop>
                    <stop offset="0.748" stopColor="#8248FF"></stop>
                    <stop offset="0.815" stopColor="#6A60FF"></stop>
                    <stop offset="0.881" stopColor="#4C7FFF"></stop>
                    <stop offset="0.943" stopColor="#28A4FF"></stop>
                    <stop offset="1" stopColor="#00CDFF"></stop>
                </linearGradient>
                <linearGradient id="pink-gradient" x1="5" y1="147" x2="307" y2="147" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#E9278B"></stop>
                    <stop offset="0.7" stopColor="#FF6C00"></stop>
                    <stop offset="0.7401" stopColor="#FF7200"></stop>
                    <stop offset="0.7927" stopColor="#FF8200"></stop>
                    <stop offset="0.8521" stopColor="#FF9D00"></stop>
                    <stop offset="0.9166" stopColor="#FFC300"></stop>
                    <stop offset="0.9845" stopColor="#FFF300"></stop>
                    <stop offset="1" stopColor="#FFFF00"></stop>
                </linearGradient>
                <clipPath id="oi-clip">
                    <path fill="transparent" d="M0,0v294h312V0H0z M188.2,99.5c6.7,0,12.1,5.4,12.1,12.1c0,6.7-5.4,12.2-12.1,12.2c-6.7,0-12.1-5.4-12.1-12.2C176,104.9,181.5,99.5,188.2,99.5zM133.2,205.3c-20.3,0-33.9-16.1-33.9-36.3c0-20.2,13.5-36.3,33.9-36.3c20.3,0,33.8,16.1,33.8,36.3C167,189.2,153.5,205.3,133.2,205.3zM188.3,205.3c-6.8,0-12.4-16.2-12.4-36.3c0-20,5.6-36.3,12.4-36.3c6.8,0,12.4,16.2,12.4,36.3C200.7,189.1,195.2,205.3,188.3,205.3zM133.2,188.2c-9.3,0-14.5-9.6-14.5-19.3c0-9.7,5.2-19,14.5-19c9.3,0,14.4,9.3,14.4,19C147.6,178.6,142.5,188.2,133.2,188.2z"></path>
                </clipPath>
            </defs>
            <g className="ameba">
                <path fill="purple-gradient" d="M128.7,33.4c-269.4,194.6,147.4,347.2,165.1,202.4c13-106-15.2-315.4-162.6-204.3L128.7,33.4z"clipPath="url(#oi-clip)"></path>
            </g>
            <g className="oi">
                <path d="M188.2,123.8c6.7,0,12.1-5.4,12.1-12.2c0-6.7-5.4-12.1-12.1-12.1c-6.7,0-12.1,5.4-12.1,12.1C176,118.3,181.5,123.8,188.2,123.8z M188.3,132.8c-6.8,0-12.4,16.2-12.4,36.3c0,20,5.6,36.3,12.4,36.3c6.8,0,12.4-16.2,12.4-36.3C200.7,149,195.2,132.8,188.3,132.8zM133.2,132.7c-20.3,0-33.9,16.1-33.9,36.3c0,20.2,13.5,36.3,33.9,36.3c20.3,0,33.8-16.1,33.8-36.3C167,148.8,153.5,132.7,133.2,132.7zM133.2,188.2c-9.3,0-14.5-9.6-14.5-19.3c0-9.7,5.2-19,14.5-19c9.3,0,14.4,9.3,14.4,19C147.6,178.6,142.5,188.2,133.2,188.2z"></path>
            </g>
          </svg>
          </a>
          <a href="#" className={`footer__region__city ${theme}`}>
            <span className="footer__region__city__name">RIO DE JANEIRO, RJ</span>
            <span className="isvg loaded">
            <svg version="1.1" viewBox="0 0 100 100" x="0px" xmlSpace="preserve" y="0px"><g>
            <path d="M97.9,24.4c-3.3-3.3-7.8-2.2-11.1,0L50.3,58.7L13.7,25.5c-3.3-3.3-7.8-4.4-11.1-1.1c-3.3,2.2-3.3,7.8-1.1,11.1l43.2,41c2.2,1.1,3.3,1.1,5.5,1.1s3.3-1.1,4.4-2.2l43.2-41C101.2,31,100.1,26.6,97.9,24.4z"></path>
            </g>
            </svg>
            </span>
          </a>
          
          <nav className={`footer__social ${theme}`}>
            <ul>
              <li className="footer__social__item">
                <a href="https://www.facebook.com/OiOficial/">
                  <span className="isvg loaded">
                  <svg preserveAspectRatio="xMidYMid" viewBox="0 0 8 15">
                  <g>
                  <path d="M6.000,3.000 L7.968,3.002 L8.000,-0.000 L6.000,-0.000 C4.111,-0.000 2.000,1.936 2.000,4.000 L2.000,5.000L-0.000,5.000 L-0.000,8.000 L2.000,8.000 L2.000,15.001 L5.000,15.001 L5.000,8.000 L8.000,8.000 L8.000,5.000 L5.000,5.000L5.000,4.000 C5.000,3.507 5.731,3.000 6.000,3.000 Z" className="cls-1"></path>
                  </g>
                  </svg>
                  </span>
                </a>
              </li>
              <li className="footer__social__item">
                <a href="http://www.twitter.com/digaoi/">
                  <span className="isvg loaded">
                    <svg preserveAspectRatio="xMidYMid" viewBox="0 0 16 14">
                    <g><path d="M14.200,2.112 C15.353,1.323 15.454,0.242 15.454,0.242 C15.082,0.781 13.420,1.069 13.420,1.069 C11.996,-0.6929.861,0.242 9.861,0.242 C7.353,1.175 7.726,4.229 7.726,4.229 C3.353,4.157 0.979,0.637 0.979,0.637 C-0.326,3.510 1.878,5.2531.878,5.253 C1.386,5.307 0.505,4.894 0.505,4.894 C0.471,7.534 3.081,8.469 3.081,8.469 C2.844,8.505 1.725,8.505 1.725,8.505C2.302,10.660 4.742,10.875 4.742,10.875 C2.370,12.743 -0.003,12.421 -0.003,12.421 C2.336,14.289 4.653,14.092 6.234,13.858C10.119,13.281 12.200,10.301 12.200,10.301 C14.946,6.600 14.030,3.475 14.471,3.296 C14.478,3.292 14.486,3.289 14.494,3.285C14.947,3.069 15.996,1.679 15.996,1.679 C15.251,2.109 14.200,2.112 14.200,2.112 Z" className="cls-1"></path>
                    </g>
                    </svg>
                  </span>
                </a>
              </li>
              <li className="footer__social__item">
                <a href="https://plus.google.com/u/0/+Oi/posts/">
                  <span className="isvg loaded">
                    <svg x="0px" y="0px" viewBox="0 5 24 15" xmlSpace="preserve">
                    <g><g><path d="M8,11v3c0,0,2.5,0,4,0c-0.6,3.2-5,4.2-7.3,2.2c-2.4-1.8-2.3-5.8,0.2-7.5c1.7-1.4,4.2-1,5.9,0.1c0.7-0.6,1.2-1.3,1.8-2c-1.4-1.1-3.1-1.9-5-1.8C3.7,4.9,0.1,8.1,0,12c-0.3,3.2,1.9,6.4,4.9,7.5s6.8,0.4,8.7-2.3c1.3-1.7,1.6-4.2,1.5-6.2C12.6,11,8,11,8,11z M22,11V9h-2v2h-2v2h2v2h2v-2h2v-2H22z"></path></g></g></svg>
                  </span>
                </a>
              </li>
              <li className="footer__social__item">
                <a href="https://www.youtube.com/user/oi/">
                  <span className="isvg loaded">
                    <svg preserveAspectRatio="xMidYMid" viewBox="0 0 22.81 15.88"><g><path d="M22.618,4.472 C22.530,3.518 22.340,2.581 21.933,1.706 C21.594,0.979 21.106,0.387 20.255,0.256 C19.755,0.178 19.245,0.153 18.737,0.124 C14.108,-0.139 3.788,0.139 3.243,0.161 C1.959,0.214 1.163,0.855 0.740,2.024 C0.629,2.328 0.526,2.638 0.453,2.953 C-0.015,4.993 0.043,7.068 0.045,9.139 C0.046,10.565 0.179,11.976 0.569,13.356 C1.053,15.066 1.796,15.627 3.561,15.736 C9.944,16.134 20.746,15.563 20.085,15.650 C20.839,15.551 21.353,15.158 21.741,14.542 C22.014,14.108 22.195,13.634 22.306,13.137 C22.950,10.268 22.886,7.372 22.618,4.472 ZM15.031,7.711 C13.195,8.887 11.373,10.087 9.546,11.276 C9.486,11.315 9.415,11.337 9.287,11.395 C9.287,8.710 9.287,6.106 9.287,3.403 C9.777,3.720 10.208,3.996 10.636,4.276 C12.088,5.229 13.535,6.189 14.993,7.133 C15.299,7.331 15.442,7.448 15.031,7.711 Z"></path>
                    </g></svg>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer__institucional container">
          <nav className="footer__hotlinksMobile">
            <ul>
              <li className="footer__hotlinksMobile--item">
                <a href="#">você</a>
              </li>
              <li className="footer__hotlinksMobile--item">
                <a href="#">empresas</a>
              </li>
              <li className="footer__hotlinksMobile--item">
                <a href="#">investidores</a>
              </li>
            </ul>
          </nav>

          <nav className={`footer__institucional__nav ${theme}`}>
            <ul>
              <li className="footer__institucional__nav__item">
                <a href="/oi/oi-pra-empresas/">Empresas</a>
              </li>
              <li className="footer__institucional__nav__item">
                <a href="http://ri.oi.com.br/oi2012/web/default_pt.asp?idioma=0&amp;conta=28">Investidores</a>
              </li>
              <li className="footer__institucional__nav__item">
                <a href="/oi/sobre-a-oi/">Sobre a Oi</a>
              </li>
              <li className="footer__institucional__nav__item">
                <a href="/oi/oi-pra-voce/atendimento/fale-com-a-oi/lojas-fisicas-da-oi/">Lojas da Oi</a>
              </li>
              <li className="footer__institucional__nav__item large-up">
                <a href="/nossa-marca/">Nossa Marca</a>
              </li>
              <li className="footer__institucional__nav__item large-up">
                <a href="/outras-operadoras/">Outras Operadoras</a>
              </li>
            </ul>
            <a className={`footer__institucional__oi-az-button ${theme}`} href="http://www.oi.com.br/#!finder">Oi de A a Z</a>
          </nav>
        </div>

      </div>
    );

  }  
}

export { Footer }
export default Footer;

