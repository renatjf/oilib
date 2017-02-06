import React, { Component } from 'react';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './../reducers'

import TemplateC2c from './../templates/C2c'

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
)(createStore)

let store = createStoreWithMiddleware(reducer)

class BandaLarga15mega extends Component {

  render() {

    return (
    	<Provider store={store}>
    		<TemplateC2c>
    			{ this.props.children }
    		</TemplateC2c>
    	</Provider>
    );
  }
}

export { BandaLarga15mega }
export default BandaLarga15mega