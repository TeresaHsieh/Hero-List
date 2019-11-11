import React from "react";
import styled from "styled-components";

// Styled-components
const LightBoxDiv = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  background: #f5efbc00;
`;

const Note = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: relative;
  width: 400px;
  height: 250px;
  border-radius: 5px;
  padding: 20px;
  margin-top: calc(50vh - 250px / 2);
  margin-left: calc(50vw - 400px / 2);
`;

const NoteWords = styled.div`
  color: black;
  font-size: 25px;
  font-weight: bold;
  background-color: white;
  width: 300px;
`;

const ConfirmButton = styled.button`
  background-color: rgb(218, 56, 50);
  color: white;
  font-size: 20px;
  border-radius: 10px;
  padding: 10px 15px;
  cursor: pointer;
  margin-top: 50px;
`;

// NotFound Component

class LightBoxPoints extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <LightBoxDiv>
          <Note>
            <NoteWords>請將「剩餘點數」分配完</NoteWords>
            <ConfirmButton onClick={this.props.closeLightBoxPoints}>
              我知道了！
            </ConfirmButton>
          </Note>
        </LightBoxDiv>
      </>
    );
  }
}

export default LightBoxPoints;
