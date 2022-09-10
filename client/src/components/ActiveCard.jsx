import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Badge from "./Badge";
import axios from "axios";
import { mobile600 } from "../responsive";

import ModalContent from "../components/ModalContent";
import Modal from "react-modal";

const Container = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 15px;
  box-shadow: 3px 3px 6px #888888;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  pointer-events: ${(props) => (props.active ? "initial" : "none")};
  cursor: ${(props) => (props.active ? "pointer" : "not-allowed")};
  background: ${(props) => (props.active ? "white" : "#e0e0e0")};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 15px;
  padding: 30px;
`;

const AskContainer = styled.div`
  flex: 4;
`;

const Ask = styled.p`
  font-size: 16px;
  ${mobile600({
    fontSize: "14px",
  })}
`;

const InfoContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
`;

Modal.setAppElement("#root");
const ActiveCard = (props) => {
  const currentUserId = useSelector((state) => {
    return state.userLogin.currentUser._id;
  });

  const [isOpen, setOpen] = useState(false);
  const [askResponse, setResponse] = useState("");

  const handleLongAsk = (ask) => {
    return ask.length > 40 ? ask.slice(0, 35) + "..." : ask;
  };

  const handleSubmission = async () => {
    try {
      const response = await axios.put(`/api/poll/${props.pollId}`, {
        userId: currentUserId,
        response: askResponse.toLowerCase(),
      });
      alert("Thankyou for your response.");
    } catch (e) {
      alert("You have already submitted your response for this poll.");
    }
  };

  return (
    <Container active={props.active}>
      <Wrapper onClick={() => setOpen(true)}>
        <AskContainer>
          <Ask>{handleLongAsk(props.ask)}</Ask>
        </AskContainer>
        <InfoContainer>
          <Badge
            text={props.active ? `Active` : `Inactive`}
            color={props.active ? "green" : "red"}
          />
          <Badge
            text={props.visibility}
            color={props.visibility === "public" ? "blue" : "yellow"}
          />
        </InfoContainer>
      </Wrapper>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setOpen(false)}
        style={{ overlay: { zIndex: 1000 } }}
      >
        <ModalContent
          setOpen={setOpen}
          ask={props.ask}
          opt1={props.opt1}
          opt2={props.opt2}
          opt3={props.opt3}
          opt4={props.opt4}
          setResponse={setResponse}
          handleSubmission={handleSubmission}
          askResponse={askResponse}
        />
      </Modal>
    </Container>
  );
};

export default ActiveCard;
