import React from 'react';
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Container = styled.div`
    height: 50vh;
`;
const Wrapper = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 50px;
`;

const Title = styled.p`
    font-size: 24px;
    margin-bottom: 20px;
`
const Content = styled.div`
    margin-top: 10px;
    font-size: 20px;
`;

const NameContainer = styled.div`
    display: flex;
    margin-bottom: 10px;
`
const Name = styled.p`
    margin-left: 5px;
`
const EmailContainer = styled.div`
    display: flex;
    margin-bottom: 10px;
`
const Email = styled.p`
    margin-left: 5px;
`


const About = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Designed and Developed By </Title>
                <Content>
                    <NameContainer>
                        <PersonIcon />
                        <Name>Vikas Pandey</Name>
                    </NameContainer>
                    <EmailContainer>
                          <EmailIcon/>
                        <Email>vikas2pandey020@gmail.com</Email>
                    </EmailContainer>
                    <EmailContainer>
                        <LinkedInIcon />
                        <Email>Follow me on LinkedIn</Email>
                    </EmailContainer>
                </Content>
            </Wrapper>
        </Container>
    );
}

export default About