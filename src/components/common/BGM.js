import React from "react";
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
      musicPlaying: true
    };

    this.url =
      "https://firebasestorage.googleapis.com/v0/b/marvel-hero-list.appspot.com/o/Avenger-Theme-BGM.mp3?alt=media&token=73a6d327-7040-45eb-8a69-eebae9be1ca8";
    this.audio = new Audio(this.url);
  }

  componentDidMount() {
    this.audio.play();
    this.setState({ musicPlaying: !this.state.musicPlaying });
  }

  togglePlayingMusic = () => {
    this.setState({ musicPlaying: !this.state.musicPlaying }, () => {
      this.state.musicPlaying ? this.audio.play() : this.audio.pause();
    });
  };

  componentWillUnmount() {
    this.audio.pause();
    this.setState({ musicPlaying: !this.state.musicPlaying });
  }

  render() {
    return (
      <div>
        <button onClick={this.togglePlayingMusic}>
          {this.state.musicPlaying ? (
            <MusicPlayer src="https://firebasestorage.googleapis.com/v0/b/marvel-hero-list.appspot.com/o/play.png?alt=media&token=ceebe165-2592-43c6-aa19-0359f1018931" />
          ) : (
            <MusicPlayer src="https://firebasestorage.googleapis.com/v0/b/marvel-hero-list.appspot.com/o/pause.png?alt=media&token=85d87720-103c-4666-a9dc-722820624e1d" />
          )}
        </button>
      </div>
    );
  }
}

export default BGM;
