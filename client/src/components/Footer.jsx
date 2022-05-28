import React from 'react'
import styled from 'styled-components'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Container = styled.div`
    background: black;
    color: white;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
`;
const Left = styled.div`
    flex: 1;
    margin-left: 20px;
`;
const Center = styled.div`
    flex: 1;
`;
const Right = styled.div`
    flex: 1;
`;
const Title = styled.div`
    font-size: 20px;
    margin-bottom: 10px;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const Logo = styled.div`
    font-size: 30px;
    margin-bottom: 10px;
`;
const Description = styled.div`
    margin-bottom: 10px;
`;
const InfoContainer = styled.div``;
const Email = styled.div``;
const Phone = styled.div``;
const Link = styled.div``;

const Footer = () => {
  return (
      <Container>
          <Wrapper>
              <Left>
                  <Title>Follow us on:</Title>
                  <SocialContainer>
                      <InstagramIcon style={{cursor: "pointer"}}/>
                      <LinkedInIcon style={{cursor: "pointer"}}/>
                      <FacebookIcon style={{ cursor: "pointer" }} />
                      <TwitterIcon style={{ cursor: "pointer" }}/>
                  </SocialContainer>
              </Left>
              <Center>
                  <Title>Important Links</Title>
                  <Link>About</Link>
                  <Link>Carrers</Link>
                  <Link>Home</Link>
              </Center>
              <Right>
                  <Logo>POLL.</Logo>
                  <Description>This is a project website created by Vikas. Please reach out to us via: </Description>
                  <InfoContainer>
                      <Email>Email: vikas2pandey020@gmail.com</Email>
                      <Phone>Phone: +91 100 123 4567</Phone>
                  </InfoContainer>
              </Right>
          </Wrapper>
    </Container>
  )
}

export default Footer;
