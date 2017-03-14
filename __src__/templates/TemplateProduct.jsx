import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from './../actions'

import { HeaderProduct, Header, HeaderCelular } from './../organisms/Header'
import Content from './../organisms/Content'
import Footer from './../organisms/Footer'
import ModalMobile from './../organisms/ModalMobile'



class TemplateProduct extends Component {

  render() {


  	let { header, show_mobile_menu, layout, theme, themeHeader, themeFooter, namePage, bindActions } = this.props

    if (theme) {

      if (!themeHeader) {
        themeHeader = theme;
      }

      if (!themeFooter) {
        themeFooter = theme;
      }

    }

    if (namePage == undefined) {
      namePage = 'Nome da página';
    }
    if (!namePage) {
      namePage = 'Nome da página';
    }
    return (
    	<div>
        <Header {...this.props} data={header} namePage={namePage} layout={ layout } theme={themeHeader} show_mobile_menu={show_mobile_menu}/>
        <HeaderCelular {...this.props} data={header} namePage={namePage} layout={ layout } theme={themeHeader} show_mobile_menu={show_mobile_menu}/>
      	<HeaderProduct {...this.props} data={header} namePage={namePage} layout={ layout } theme={themeHeader} show_mobile_menu={show_mobile_menu}/>
        <Content layout={ layout }>
          { this.props.children }          
        </Content>
      	<Footer theme={themeFooter} />
        <ModalMobile theme={themeHeader} show_menu={header.get('showMobileMenu')}  show_mobile_menu={show_mobile_menu}/> 
      </div>
    );
    
  }
}
function mapStateToProps(state) {
  return {
    header : state.header
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export { TemplateProduct }
export default connect(mapStateToProps, mapDispatchToProps)(TemplateProduct)