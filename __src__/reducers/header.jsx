import { SHOW_MOBILE_MENU } from '../actions'
import Immutable from 'immutable'

let defaultState = Immutable.fromJS({ showMobileMenu : false })

function appReducer (state = defaultState, action) {
  switch ( action.type ) { 
  	case SHOW_MOBILE_MENU:    
		return state.merge({showMobileMenu : action.show})
		break
	default: 
		return state
	}
}

export default appReducer