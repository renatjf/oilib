import React, { Component } from 'react'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './../reducers'

import TemplateECare from './../templates/ECare'


const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
)(createStore)

let store = createStoreWithMiddleware(reducer)

class ECare extends Component {

  render() {

    return (
    	<Provider store={store}>
    		<TemplateECare> 
    			{ this.props.children }
    		</TemplateECare>
    	</Provider>
    )
  }
}

export { ECare }
export default ECare