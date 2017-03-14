import React, { Component } from 'react'

class Content extends Component {

  render() {
  	let className = this.props.layout === 'full' ? 'container-full' : 'container-grid';

    return (

      <div className="container-full">
      	<div className={ className }>
           { this.props.children }    
      	</div>
      </div>
    );

}
  }  

export { Content }
export default Content;
