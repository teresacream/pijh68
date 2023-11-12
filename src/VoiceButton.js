import React, { Component } from 'react';


class VoiceButton extends Component {

  state = {
    isPlaying: false,
    imgDir: this.props.StopImgDir,
  };


  componentDidMount() {
    this.audio = new Audio(this.props.voiceDir);
    this.audio.loop = true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isPlaying)
      this.audio.play();
    else {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }

  onClick = () => {
    this.setState({
      isPlaying: !this.state.isPlaying,
      imgDir: this.state.imgDir === this.props.StopImgDir? this.props.PlayImgDir: this.props.StopImgDir,
    })
  }

  render() {
    return (
      <div className="VoiceButton">
        <img
          src={this.state.imgDir}
          onClick={this.onClick}
        />
      </div>
    )
  }
}

export default VoiceButton;