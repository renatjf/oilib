import { CAROUSEL_CURRENT, CAROUSEL_PREV, CAROUSEL_NEXT, RESET_CAROUSEL } from '../actions'

import Immutable from 'immutable'

let defaultState = Immutable.fromJS({ 
	img: [
      'http://placekitten.com/g/200/200',  
      'http://placekitten.com/g/200/200',   
      'http://placekitten.com/g/200/200'  
      ]
	, zIndex: 10
	, loading: true 
	, active: -1
	, action: 'next'
	, refs: {
		box: ''
		, loading: {
			all: ''
			, current: ''
		}
		, control: {
			all: ''
			, current: ''
		}
	}
	, orientation: true
	, animation: {
		set: {
			top: '-100%'
			, left:0
		}
		, to: {
			top:'0'
		}
	}
});

function appReducer (state = defaultState, action) {
  switch ( action.type ) { 
  	case RESET_CAROUSEL:    
		return state.merge({loading:true, active: -1}) 
		break
  	case CAROUSEL_CURRENT:  

  		let set = {}
	    let to = {}
	    let active = action.current
	    let ref = '.box'+action.current
	    let zIndex = state.get('zIndex')

	    let box = document.querySelector(ref)
	    let loadingAll = document.querySelectorAll('.loading')
	    let controlAll = document.querySelectorAll('.boxcontrol')
	    let control = document.querySelector(ref+'control')
	    let loading = document.querySelector(ref+'loading')

	    switch(true){
	    case action.action == 'prev':
	      set = { zIndex:state.get('zIndex'), top: '100%',left:0}
	      to = { top:'0',zIndex:state.get('zIndex')}
	      break
	    case action.action == 'next':
	      set = { top: '-100%',left:0,zIndex:state.get('zIndex')}
	      to = { top:'0',zIndex:state.get('zIndex')}
	      break
	    case action.action == 'left':
	      set = { zIndex:state.get('zIndex'), top: '0',left:'-100%'}
	      to = { left:'0',zIndex:state.get('zIndex')}
	      break
	    case action.action == 'right':
	      set = { zIndex:state.get('zIndex'), left: '100%',top:0}
	      to = { left:'0',zIndex:state.get('zIndex')}
	      break
	    default:
	      if(state.get('active') < active) {
	        set = { top: '-100%',left:0,zIndex:state.get('zIndex')}
	        to = { top:'0',zIndex:state.get('zIndex')}
	      } else {
	        set = { zIndex:state.get('zIndex'), top: '100%',left:0}
	        to = { top:'0',zIndex:state.get('zIndex')}
	      }
	    }

		return state.merge({
			active: active
			, action:action.action
			, refs: {
				box: box
				, loading: {
					all: loadingAll
					, current: loading
				}
				, control: {
					all: controlAll
					, current: control
				}
			}
			, animation: {
				set: set
				, to: to
			}
			, zIndex: zIndex + 1
		})
		break 
	default: 
		return state
	}
}

export default appReducer