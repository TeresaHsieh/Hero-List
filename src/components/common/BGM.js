import React from "react";
import Play from "../../img/play.png";
import Pause from "../../img/pause.png";
import styled from "styled-components";

const MusicPlayer = styled.img`
  width: 30px;
  position: absolute;
  top: 30px;
  right: 50px;
  cursor: pointer;
`;

class BGM extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      musicPlaying: false
    };

    this.url =
      "https://firebasestorage.googleapis.com/v0/b/marvel-hero-list.appspot.com/o/Avenger-Theme-BGM.mp3?alt=media&token=73a6d327-7040-45eb-8a69-eebae9be1ca8";
    this.audio = new Audio(this.url);
  }

  componentDidMount() {
    this.setState({ musicPlaying: !this.state.musicPlaying }, () => {
      this.state.musicPlaying ? this.audio.play() : this.audio.pause();
    });
  }

  togglePlayingMusic = () => {
    this.setState({ musicPlaying: !this.state.musicPlaying }, () => {
      this.state.musicPlaying ? this.audio.play() : this.audio.pause();
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.togglePlayingMusic}>
          {this.state.musicPlaying ? (
            <MusicPlayer src={Play} />
          ) : (
            <MusicPlayer src={Pause} />
          )}
        </button>
      </div>
    );
  }
}

export default BGM;
