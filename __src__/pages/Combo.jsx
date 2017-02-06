import React, { Component } from 'react';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './../reducers'

import TemplateC2cWithoutFooter from './../templates/C2cWithoutFooter'


const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
)(createStore)

let store = createStoreWithMiddleware(reducer)
class Combo extends Component {

  render() {

    return (
        <Provider store={store}>
            <TemplateC2cWithoutFooter />
        </Provider>
    );
  }
}

export { Combo }
export default Combo