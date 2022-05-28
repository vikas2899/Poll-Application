import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;
    ${mobile({
        marginTop: "100px"
    })}
`;

const Title = styled.h3`
    text-align: center;
    margin-bottom: 20px;
    letter-spacing: 5px;
`;

const CardContainer = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-around;
`;

const Card = styled.div`
    
    box-shadow: 5px 10px 18px #888888;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease;
    cursor: pointer;
    &:hover {
       transform: translateY(-10px);
    }
`;

const Image = styled.img`
  width: 300px;
  height: 250px;
`;

const Description = styled.p`
    text-align: center;
    margin-bottom: 6px;
    font-size: 20px;
`;

const ServiceCard = () => {
  return (
      <Container>
              <Title>OUR SERVICES</Title>
              <CardContainer>
                  <Card>
                      <Image src="https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                      <Description>Create Polls</Description>
                  </Card>
                  <Card>
                      <Image src="https://images.pexels.com/photos/416322/pexels-photo-416322.jpeg"/>
                      <Description>Submit Responses</Description>
                  </Card>
                  <Card>
                      <Image src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                      <Description>View Results</Description>
                  </Card>
              </CardContainer>
    </Container>
  )
}

export default ServiceCard;