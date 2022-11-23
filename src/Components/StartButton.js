import React from "react";
import styled from "styled-components";

const StyledStartButton = styled.button`
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  border: none;
  color: white;
  background: #2a4f61;
  font-family: "Menlo";
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  transition: box-shadow 0.15s, transform 0.15s;
`;

const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
);

export default StartButton;
