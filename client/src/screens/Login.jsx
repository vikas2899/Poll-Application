import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../features/user/userLoginSlice";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
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
`;
const Wrapper = styled.div`
  box-shadow: 5px 10px 18px #888888;
  width: 500px;
  height: 400px;
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
  border: 1px solid;
  border-color: ${(props) => (props.isError === "" ? "lightgray" : "red")};
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

const Error = styled.span`
  padding-top: 50px;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const error = useSelector((state) => {
    return state.userLogin.error;
  });

  const dispatch = useDispatch();

  const handleLogin = () => {
    if (email && password) {
      dispatch(
        userLogin({
          email: email,
          password: password,
        })
      );
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <InputWrapper isError={error}>
          <EmailIcon />
          <Email
            placeholder="your email"
            type={"email"}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </InputWrapper>
        <InputWrapper isError={error}>
          <KeyIcon />
          <Password
            placeholder="your password"
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </InputWrapper>
        <Button onClick={handleLogin}>Login</Button>
        {error !== "" ? <Error>Invalid Username or Password</Error> : null}
      </Wrapper>
    </Container>
  );
};

export default Login;
