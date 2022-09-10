import React, { useState } from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { pollCreate } from "../features/poll/pollSlice";
import { mobile750 } from "../responsive";

const Container = styled.div`
  height: 100vh;
  ${mobile750({
    height: "85%",
    marginBottom: "20px",
  })}
`;

const Title = styled.p`
  margin-top: 6%;
  margin-left: 8%;
  font-size: 20px;
  margin-bottom: 75px;
  ${mobile750({
    marginBottom: "50px",
  })}
`;

const PollContainer = styled.div`
  border: 2px solid lightgray;
  display: flex;
  width: 80%;
  margin: auto;
  height: 500px;
  ${mobile750({
    flexDirection: "column",
    height: "85%",
  })}
`;
const Box = styled.div`
  flex: 1;
  ${mobile750({
    marginBottom: "auto",
  })}
`;
const Ask = styled.div`
  width: 90%;
  margin: auto;
  height: 40%;
  margin-top: 25px;
  margin-bottom: 25px;
  ${mobile750({
    height: "60%",
  })}
`;

const AskInput = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  padding: 10px;
  font-size: 18px;
  &:focus {
    outline: none;
  }
  border: 1px solid lightgray;
`;

const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
`;

const Choices = styled.div`
  display: flex;
  border: 1px solid lightgray;
  height: 40px;
  margin-bottom: 10px;
  ${mobile750({
    marginBottom: "20px",
  })}
`;

const Choice = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  margin-bottom: 8px;
  padding: 8px;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  margin: auto;
  background: black;
  color: white;
  &:hover {
    background: transparent;
    color: black;
  }
  ${mobile750({
    marginBottom: "20px",
  })};
`;

const VisibilityContainer = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 25px;
  ${mobile750({
    marginTop: "150px",
    width: "90%",
  })};
`;

const DateContainer = styled.div`
  width: 80%;
  height: 50px;
  margin: auto;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile750({
    width: "90%",
  })};
`;

const SubmitButton = styled.button`
  width: 80%;
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
  ${mobile750({
    width: "90%",
  })};
`;

const MessageContainer = styled.div`
  width: 80%;
  height: 50px;
  margin: auto;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Message = styled.p``;

const CreatePoll = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => {
    return state.userLogin.currentUser;
  });

  const { currentPoll, error } = useSelector((state) => {
    return state.pollCreate;
  });

  const [ask, setAsk] = useState("");
  const [optionNumber, setOptionNumber] = useState(2);
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [optionThree, setOptionThree] = useState("");
  const [optionFour, setOptionFour] = useState("");
  const [visibility, setVisibility] = useState("");
  const [expiresOn, setExpiresOn] = useState("");
  const [errorMessage, setError] = useState("");

  const handleAsk = (e) => {
    setAsk(e.target.value);
  };

  const handleOptions = (e, num) => {
    if (num === 1) {
      setOptionOne(e.target.value);
    } else if (num === 2) {
      setOptionTwo(e.target.value);
    } else if (num === 3) {
      setOptionThree(e.target.value);
    } else if (num === 4) {
      setOptionFour(e.target.value);
    }
  };

  const handleClick = () => {
    setOptionNumber(optionNumber + 1);
  };

  const handleVisibility = (e) => {
    setVisibility(e.target.value);
  };

  const handleDate = (e) => {
    setExpiresOn(e.target.value);
  };

  const resetForm = () => {
    setAsk("");
    setOptionNumber("");
    setOptionOne("");
    setOptionTwo("");
    setOptionThree("");
    setOptionFour("");
    setVisibility("");
    setExpiresOn("");
  };

  const handleSubmit = () => {
    if (!ask || !optionOne || !optionTwo || !visibility || !expiresOn) {
      setError("Please fill all the details");
      return;
    } else {
      dispatch(
        pollCreate({
          ask: ask,
          opt1: {
            value: optionOne,
          },
          opt2: {
            value: optionTwo,
          },
          opt3: {
            value: optionThree,
          },
          opt4: {
            value: optionFour,
          },
          createdBy: currentUser._id,
          visibility: visibility,
          expiresOn: parseInt(expiresOn.split(" ")[0]),
        })
      );
      resetForm();
    }
  };

  return (
    <Container>
      <Title>Create New Poll</Title>
      <PollContainer>
        <Box>
          <Ask>
            <AskInput
              placeholder="Ask ..."
              onChange={(e) => handleAsk(e)}
              value={ask}
            ></AskInput>
          </Ask>
          <ChoiceContainer>
            <Choices>
              <Choice
                placeholder="Option 1"
                value={optionOne}
                onChange={(e) => handleOptions(e, 1)}
              ></Choice>
            </Choices>
            <Choices>
              <Choice
                placeholder="Option 2"
                value={optionTwo}
                onChange={(e) => handleOptions(e, 2)}
              ></Choice>
            </Choices>
            {optionNumber >= 3 ? (
              <Choices>
                <Choice
                  placeholder="Option 3"
                  value={optionThree}
                  onChange={(e) => handleOptions(e, 3)}
                ></Choice>
              </Choices>
            ) : null}
            {optionNumber >= 4 ? (
              <Choices>
                <Choice
                  placeholder="Option 4"
                  value={optionFour}
                  onChange={(e) => handleOptions(e, 4)}
                ></Choice>
              </Choices>
            ) : null}
            {optionNumber < 4 ? (
              <Button onClick={handleClick}>
                <AddIcon />
              </Button>
            ) : null}
          </ChoiceContainer>
        </Box>
        <Box>
          <VisibilityContainer>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Visibility</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={visibility}
                label="Visibility"
                onChange={(e) => handleVisibility(e)}
              >
                <MenuItem value={"public"}>Public</MenuItem>
                <MenuItem value={"private"}>Private</MenuItem>
              </Select>
            </FormControl>
          </VisibilityContainer>
          <DateContainer>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Expires in</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={expiresOn}
                label="Expires in"
                onChange={(e) => handleDate(e)}
              >
                <MenuItem value={"24 Hrs"}>24 Hrs</MenuItem>
                <MenuItem value={"48 Hrs"}>48 Hrs</MenuItem>
              </Select>
            </FormControl>
          </DateContainer>
          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
          <MessageContainer>
            {errorMessage !== "" ? (
              <Message>{errorMessage}</Message>
            ) : error ? (
              <Message>Something went Wrong !!</Message>
            ) : currentPoll ? (
              <Message>Poll Created Successfully !</Message>
            ) : null}
          </MessageContainer>
        </Box>
      </PollContainer>
    </Container>
  );
};

export default CreatePoll;
