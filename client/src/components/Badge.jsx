import React from "react";
import styled from "styled-components";
import { mobile600, mobile750 } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  border: ${(props) =>
    props.color === "blue"
      ? "#4F6CFF"
      : props.color === "green"
      ? "green"
      : props.color === "red"
      ? "red"
      : "#FFBF00"};
  padding: 8px;
  border-radius: 3px;
  background: ${(props) =>
    props.color === "blue"
      ? "#4F6CFF"
      : props.color === "green"
      ? "green"
      : props.color === "red"
      ? "red"
      : "#FFBF00"};
  ${mobile600({
    padding: "5px",
    marginRight: "3px",
  })}
  ${mobile750({
    marginRight: "3px",
  })}
`;
const Text = styled.p`
  text-transform: capitalize;
  color: white;
  ${mobile600({
    fontSize: "12px",
  })}
`;

const Badge = (props) => {
  return (
    <Container>
      <Wrapper color={props.color}>
        <Text>{props.text}</Text>
      </Wrapper>
    </Container>
  );
};

export default Badge;
