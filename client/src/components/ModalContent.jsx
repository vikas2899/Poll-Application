import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { mobile600 } from "../responsive";

const Container = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 25px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;
const Title = styled.h2``;

const Wrapper = styled.div`
  display: flex;
  ${mobile600({
    flexDirection: "column",
  })}
`;
const Box = styled.div`
  flex: 1;
  padding: 20px;
  height: 450px;
  border: 1px solid lightgray;
`;
const AskContainer = styled.div``;
const Ask = styled.p``;
const OptContainer = styled.div``;
const Opt1 = styled.p`
  border: 1px solid lightgray;
  padding: 20px;
  margin-bottom: 10px;
  transition: all 0.5s ease;
  cursor: pointer;
  background: ${(props) => (props.active === true ? "#49A5FF" : "")};
`;

const Opt2 = styled(Opt1)`
  background: ${(props) => (props.active === true ? "#49A5FF" : "")};
`;

const Opt3 = styled(Opt1)`
  background: ${(props) => (props.active === true ? "#49A5FF" : "")};
`;

const Opt4 = styled(Opt1)`
  background: ${(props) => (props.active === true ? "#49A5FF" : "")};
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  margin: auto;
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  color: white;
  text-align: center;
  &:hover {
    background: transparent;
    color: black;
  }
`;

const Message = styled.p`
  margin-top: 25px;
`;

const ModalContent = (props) => {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    if (props.askResponse === "") {
      setMessage("Please select one of the option");
    } else {
      props.setResponse("");
      props.handleSubmission();
      setTimeout(() => {
        props.setOpen(false);
      }, 1000);
    }
  };

  return (
    <Container>
      <ModalHeader>
        <Title>Vote your Opinion!</Title>
        <CloseIcon
          onClick={() => {
            props.setOpen(false);
          }}
        />
      </ModalHeader>
      <Wrapper>
        <Box>
          <AskContainer>
            <Ask>{props.ask}</Ask>
          </AskContainer>
        </Box>
        <Box>
          <OptContainer>
            <Opt1
              onClick={() => props.setResponse("Opt1")}
              active={props.askResponse === "Opt1" ? true : false}
            >
              {props.opt1}
            </Opt1>
            <Opt2
              onClick={() => props.setResponse("Opt2")}
              active={props.askResponse === "Opt2" ? true : false}
            >
              {props.opt2}
            </Opt2>
            {props.opt3 && (
              <Opt3
                onClick={() => props.setResponse("Opt3")}
                active={props.askResponse === "Opt3" ? true : false}
              >
                {props.opt3}
              </Opt3>
            )}
            {props.opt4 && (
              <Opt4
                onClick={() => props.setResponse("Opt4")}
                active={props.askResponse === "Opt4" ? true : false}
              >
                {props.opt4}
              </Opt4>
            )}
          </OptContainer>
          <SubmitButton onClick={handleClick}>Submit Response</SubmitButton>
          {message ? <Message>{message}</Message> : null}
        </Box>
      </Wrapper>
    </Container>
  );
};

export default ModalContent;
