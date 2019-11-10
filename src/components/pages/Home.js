import React from "react";
import { withRouter } from "react-router-dom";
import BGM from "../common/BGM";
import styled from "styled-components";
import LogoImg from "../../img/logo.png";

const BackGround = styled.div`
  position: relative;
`;

const StartButton = styled.button`
  background-color: rgb(218, 56, 50);
  color: white;
  font-size: 60px;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 300px;
  margin-bottom: 50px;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <BackGround>
          <BGM />
          <Intro>
            <Logo src={LogoImg} />
            <StartButton
              onClick={() => {
                this.props.history.push("/heroes");
              }}
            >
              Start The Game!
            </StartButton>
          </Intro>
        </BackGround>
      </>
    );
  }
}

export default withRouter(Home);
