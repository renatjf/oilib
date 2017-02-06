import React, { Component } from 'react'
import Link from './../atoms/Link'

class Footer extends Component {

  render() {
    return (
      <div className='footer'>
		<Link>Action Footer</Link> 
      </div>
    );

  }  
}
class FooterNBA extends Footer {

  render() {
    return (
      <div className='footer'>
		<Link>Action Footer</Link> 
      </div>
    );

  } 
}

export { Footer }
export { FooterNBA }
export default Footer;