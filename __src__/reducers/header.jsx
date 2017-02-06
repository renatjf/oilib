import { CHANGE_NAME } from '../actions'
import Immutable from 'immutable'

let defaultState = Immutable.fromJS({ name : '', age: 30 })

function appReducer (state = defaultState, action) {
  switch ( action.type ) { 
  	case CHANGE_NAME:    
  	 	let name = action.name;
  	 	let age = state.get('age') + 1;
		return state.merge({name:name,age:age})
		break
	default: 
		return state
	}
}

export default appReducer