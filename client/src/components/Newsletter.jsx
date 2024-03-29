import React from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import { mobile500, mobile750 } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background: #fcf5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  margin-top: 80px;
  ${mobile750({
    marginTop: "50px",
  })}
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile750({
    fontSize: "50px",
  })}
`;

const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  marging-bottom: 20px;
  ${mobile750({
    width: "85%",
    margin: "0px auto 0px suto",
    fontSize: "18px",
  })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  margin-top: 20px;
  ${mobile750({
    width: "85%",
  })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 2;
  border: none;
  background: black;
  color: white;
  cursor: pointer;
  &:hover {
    background: lightgray;
    color: black;
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Subscribe to our newsletter to get timely updates.
      </Description>
      <InputContainer>
        <Input placeholder="your email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
