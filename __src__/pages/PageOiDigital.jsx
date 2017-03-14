import React, { Component } from 'react'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './../reducers'

import TemplateOiDigital from './../templates/TemplateOiDigital'
import '../styles/PageOiDigital.css'

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
)(createStore)

let store = createStoreWithMiddleware(reducer)

class PageOiDigital extends Component {

  render() {
    return (
    	<Provider store={store}>
    		<TemplateOiDigital { ...this.props }> 
    			{ this.props.children }
    		</TemplateOiDigital>
    	</Provider>
    )
  }
}

export { PageOiDigital }
export default PageOiDigital