import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from './../actions'

import Header from './../organisms/Header'
import Content from './../organisms/Content'
import Footer from './../organisms/Footer'
import ModalMobile from './../organisms/ModalMobile'
import Carousel from './../molecules/Carousel'



class Home extends Component {

  render() {

  	let { carousel, carousel_set_current, carousel_prev, carousel_next, header, show_mobile_menu } = this.props

    return (
    	<div>
        	<Header data={header} show_mobile_menu={show_mobile_menu}/>
        	<Carousel 
        		data={carousel} 
        		carousel_set_current={carousel_set_current} 
        		carousel_prev={carousel_prev} 
        		carousel_next={carousel_next} 
        	/>
          <Content>
            { this.props.children }          
          </Content>
        	<Footer />
          <ModalMobile show_menu={header.get('showMobileMenu')}  show_mobile_menu={show_mobile_menu}/> 
        </div>
    );
    
  }
}

function mapStateToProps(state) {
  return {
    header : state.header
    , carousel : state.Carousel
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export { Home }
export default connect(mapStateToProps, mapDispatchToProps)(Home)