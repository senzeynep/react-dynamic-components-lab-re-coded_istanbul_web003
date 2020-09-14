import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    console.log(this.props.opacity);
    return this.props.opacity < 0.2 ? null : ( 
      <div className="color-box" style={{opacity: this.props.opacity, 'border-color':'red'}}>
        <ColorBox opacity={this.props.opacity - 0.1}/>
      </div>
    )
  }

}

