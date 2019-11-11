import React from "react";
import styled from "styled-components";

// Styled-components
const CalculateButtonStyle = styled.button`
  width: 30px;
  background-color: rgb(218, 56, 50);
  color: white;
  cursor: pointer;
  padding: 5px 8px 5px 8px;
  border-radius: 10px;
`;

// CalculateButton Component
class CalculateButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <CalculateButtonStyle onClick={this.props.calculateOne}>
          {this.props.calculateType === "minus" ? "-" : "+"}
        </CalculateButtonStyle>
      </>
    );
  }
}

export default CalculateButton;
