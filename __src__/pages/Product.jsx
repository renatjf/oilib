import React, { Component } from 'react'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './../reducers'

import TemplateProduct from './../templates/TemplateProduct'
import '../styles/PageProduct.css'

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
)(createStore)

let store = createStoreWithMiddleware(reducer)

class PageProduct extends Component {

  render() {
    return (
    	<Provider store={store}>
    		<TemplateProduct { ...this.props }> 
    			{ this.props.children }
    		</TemplateProduct>
    	</Provider>
    )
  }
}

export { PageProduct }
export default PageProduct