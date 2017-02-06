import React, { Component, StyleSheet } from 'react'
import { TweenMax } from 'gsap'

import Link from './../atoms/Link'
import Box from './../atoms/Box'
import './../styles/box.css'
import './../styles/carousel.css'
import './../styles/carousel-control.css'


class Carousel extends Component {

  constructor(props){
    super(props)
    this._applyAnimation = this._applyAnimation.bind(this)
  }

  componentDidMount(){
    this.props.carousel_next()
  }

  shouldComponentUpdate(nextProps, nextState){
    if ( nextState ){
      if ( nextState.data.get('active') != nextProps.data.get('active')) {
        this._applyAnimation(nextProps)
      }
    }else if(nextProps.data.get('active') > -1) {
      this._applyAnimation(nextProps)
    }

    this.setState(nextProps);
    return false
  }
 
  _applyAnimation( props ) {
    let refs = props.data.get('refs')
    let animation = props.data.get('animation') 

    TweenMax.set(refs.get('loading').get('all'), {width:"0"})
    TweenMax.set(refs.get('control').get('all'), {className:"-=active"})
    TweenMax.to(refs.get('control').get('current'),1,{className:"+=active"})

    TweenMax.to(refs.get('loading').get('current'), 5, {width:"100%",onComplete:()=>{
      TweenMax.set(refs.get('loading').get('current'), {width:"0",onComplete:()=>{
        props.carousel_next()
      }})
    }})
    TweenMax.set(refs.get('box'), animation.get('set').toObject())
    TweenMax.to(refs.get('box'), 2 , animation.get('to').toObject())
  }

  render() {
    return (
      <div className='carousel-wrapper'>
        <div className='carousel'>
        {
          this.props.data.get('img').map((i, key)=> {
            return (
              <div className={`box${key} box-normal`}  
              key={key}  
              >
              slide {key}
                <img  src={i} />
              </div>
            ) 
          })
        }
        </div>
        <div className="controls-wrapper">
          <div className="controls -desktop">
            <div className="items">
              <div  className="item arrow -up"  onClick={this.props.carousel_prev.bind(this)}>
                para cima
              </div>
              {
                this.props.data.get('img').map((item, key) => {
                  return (
                    <div className={`item boxcontrol box${key}control `}

                      key={ key }
                      onClick={this.props.carousel_set_current.bind(this,key,key)}
                      >
                      slider {key}
                      <div className="timer-load"><div className={`loading box${key}loading`} ></div></div>
                    </div>
                  )
                })
              }
              <div  className="item arrow -down" onClick={this.props.carousel_next.bind(this)}>
                para baixo
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } 
}
 
export { Carousel }
export default Carousel