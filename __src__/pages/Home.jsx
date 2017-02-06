import React, { Component } from 'react'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './../reducers'

import TemplateHome from './../templates/Home'
import '../styles/Home.css'

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
)(createStore)

let store = createStoreWithMiddleware(reducer)

class Home extends Component {

  render() {

    return (
    	<Provider store={store}>
    		<TemplateHome> 
    			{ this.props.children }
    		</TemplateHome>
    	</Provider>
    )
  }
}

export { Home }
export default Home