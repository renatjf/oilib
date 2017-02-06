import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from './../actions'

import Header from './../organisms/Header'
import Footer from './../organisms/Footer'
import Carousel from './../molecules/Carousel'

class Durand extends Component {

  render() {

  	let { carousel, carousel_set_current, carousel_prev, carousel_next, header } = this.props

    return (
    	<div>
        	<Header data={header}/>
        	<Carousel 
        		data={carousel} 
        		carousel_set_current={carousel_set_current} 
        		carousel_prev={carousel_prev} 
        		carousel_next={carousel_next} 
        	/>
        	{ this.props.children }
        	<Footer /> 
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

export { Durand }
export default connect(mapStateToProps, mapDispatchToProps)(Durand)