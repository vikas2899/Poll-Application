import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../features/user/userRegisterSlice";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import styled from "styled-components";
import { mobile500 } from "../responsive";

const Container = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  object-fit: cover;
  background-size: 100vw 100vh;
  margin-top: 20px;
`;
const Wrapper = styled.div`
  box-shadow: 5px 10px 18px #888888;
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  ${mobile500({
    height: "100%",
    boxShadow: "none",
  })}
`;

const Title = styled.h4`
  font-size: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  border: 1px solid lightgray;
  width: 90%;
  height: 43px;
  align-items: center;
  margin: 10px;
  justify-content: space-around;
  padding-left: 10px;
`;
const Email = styled.input`
  border: none;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

const Text = styled(Email)``;

const Password = styled.input`
  border: none;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  margin-top: 5px;
  width: 90%;
  height: 40px;
  background: black;
  color: white;
  &:hover {
    background: transparent;
    color: black;
  }
`;

const Message = styled.span`
  margin-top: 15px;
`;

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const { error, currentUser } = useSelector((state) => {
    return state.userRegister;
  });

  const dispatch = useDispatch();

  const handleRegister = () => {
    if (name && email && password && cpassword && age) {
      if (password !== cpassword) {
        setMessage("Password not match");
      } else {
        dispatch(
          userRegister({
            username: name,
            email: email,
            password: password,
            age: age,
          })
        );
      }
    } else {
      setMessage("Please fill all the details");
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Register</Title>
        <InputWrapper>
          <AccountCircleIcon />
          <Text
            placeholder="your name"
            type={"text"}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </InputWrapper>
        <InputWrapper>
          <EmailIcon />
          <Email
            placeholder="your email"
            type={"email"}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </InputWrapper>
        <InputWrapper>
          <KeyIcon />
          <Password
            placeholder="your password"
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </InputWrapper>
        <InputWrapper>
          <KeyIcon />
          <Password
            placeholder="confirm password"
            type={"password"}
            onChange={(e) => setCpassword(e.target.value)}
            value={cpassword}
          />
        </InputWrapper>
        <InputWrapper>
          <InsertEmoticonIcon />
          <Text
            placeholder="your age"
            type={"text"}
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
        </InputWrapper>
        <Button onClick={handleRegister}>Register</Button>
        {error ? (
          <Message>Something went wrong</Message>
        ) : message ? (
          <Message>{message}</Message>
        ) : currentUser ? (
          <Message>Registration Sucess. Login</Message>
        ) : null}
      </Wrapper>
    </Container>
  );
};

export default Register;
