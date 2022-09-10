import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { mobile750 } from "../responsive";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  position: relative;
  overflow: hidden;
  ${mobile750({
    height: "50vh",
  })}
`;

const ArrowContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.type === "left" && "10px"};
  right: ${(props) => props.type === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 999;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translate(${(props) => props.slideNumber * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
  ${mobile750({
    height: "50vh",
  })}
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 30px;
`;

const Title = styled.h1`
  font-size: 70px;
  ${mobile750({
    fontSize: "30px",
  })}
`;

const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  ${mobile750({
    fontSize: "10px",
  })}
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  background: black;
  color: white;
  &:hover {
    background: transparent;
    color: black;
  }
  marginbottom: "50px";
  ${mobile750({
    fontSize: "10px",
  })}
`;

const Slider = () => {
  const [slideNumber, setSlideNumber] = useState(0);

  const navigate = useNavigate();

  const currentUser = useSelector((state) => {
    return state.userLogin.currentUser;
  });

  const handleClick = (type) => {
    if (type === "left") {
      setSlideNumber(slideNumber === 0 ? 1 : slideNumber - 1);
    } else {
      setSlideNumber(slideNumber === 1 ? 0 : slideNumber + 1);
    }
  };

  return (
    <Container>
      <ArrowContainer type="left" onClick={() => handleClick("left")}>
        <ArrowBackIosIcon />
      </ArrowContainer>
      <Wrapper slideNumber={slideNumber}>
        <Slide>
          <ImageContainer>
            <Image src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176" />
          </ImageContainer>
          <InfoContainer>
            <Title>Create Poll</Title>
            <Description>
              POLL. provides you a platform to create as much as Polls or
              Surveys free of cost.
            </Description>
            {currentUser ? (
              <Button onClick={() => navigate("/poll-menu")}>CREATE NOW</Button>
            ) : (
              <Button onClick={() => navigate("/register")}>
                REGISTER NOW
              </Button>
            )}
          </InfoContainer>
        </Slide>
        <Slide>
          <ImageContainer>
            <Image src="https://images.pexels.com/photos/669621/pexels-photo-669621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </ImageContainer>
          <InfoContainer>
            <Title>VOTE NOW</Title>
            <Description>
              Depending on the visibility of your Polls, any user can
              participate in it.
            </Description>
            {currentUser ? (
              <Button onClick={() => navigate("/poll-menu")}>VOTE NOW</Button>
            ) : (
              <Button onClick={() => navigate("/register")}>
                REGISTER NOW
              </Button>
            )}
          </InfoContainer>
        </Slide>
      </Wrapper>
      <ArrowContainer type="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosIcon />
      </ArrowContainer>
    </Container>
  );
};

export default Slider;
