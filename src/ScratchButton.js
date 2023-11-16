import React, { Component } from 'react';


class ScratchButton extends Component {
  state = {
    imgDir: this.props.imgDir
  }
  
  
  onClick = () => {
    window.open(this.props.url, "_blank", "noreferrer");
  }

  onMouseOver = () => {
    this.setState({
      imgDir: this.props.imgHoverDir
    })
  }
  
  onMouseOut = () => {
    this.setState({
      imgDir: this.props.imgDir
    })
  }

  render() {
    return (
      <div className="ScratchButton">
        <img
          src={this.state.imgDir}
          onClick={this.onClick}
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
        />
      </div>
    )
  }
}

export default ScratchButton;