import React from "react";
import styled from "styled-components";

// Styled-components
const LightBoxDiv = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Note = styled.div`
  background-color: white;
  width: 300px;
`;

const NoteWords = styled.div`
  color: black;
  font-size: 250px;
  font-weight: bold;
`;

const ConfirmButton = styled.button`
  background-color: rgb(218, 56, 50);
  color: white;
  font-size: 60px;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
`;

// NotFound Component
function NotFound() {
  return (
    <>
      <LightBoxDiv>
        <Note>
          <NoteWords>這是 lightbox</NoteWords>
          <ConfirmButton>我知道了！</ConfirmButton>
        </Note>
      </LightBoxDiv>
    </>
  );
}

export default NotFound;
