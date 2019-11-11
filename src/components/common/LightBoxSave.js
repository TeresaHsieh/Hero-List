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

// NotFound Component

class LightBoxSave extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <LightBoxDiv>
          <Note>
            <NoteWords>已儲存最新點數分配！</NoteWords>
          </Note>
        </LightBoxDiv>
      </>
    );
  }
}

export default LightBoxSave;
