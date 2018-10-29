import React from 'react'

export default class ImgToSVG extends React.Component {
  render(){
    return global.window ? (
      <img className="to-svg" data-src={this.props.src} />
    ) : null;
  }
}
